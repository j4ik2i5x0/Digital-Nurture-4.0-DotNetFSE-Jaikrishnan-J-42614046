using Confluent.Kafka;
using System;
using System.Drawing;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace KafkaSplitChat
{
    public partial class Form1 : Form
    {
        private RichTextBox chatA;
        private RichTextBox chatB;
        private TextBox inputA;
        private TextBox inputB;
        private Button sendA;
        private Button sendB;

        private readonly string topic = "chat-topic";
        private readonly IProducer<Null, string> producer;
        private readonly CancellationTokenSource cts = new CancellationTokenSource();

        public Form1()
        {
            var producerConfig = new ProducerConfig
            {
                BootstrapServers = "localhost:9092"
            };

            producer = new ProducerBuilder<Null, string>(producerConfig).Build();

            InitializeComponent();
            StartConsumer();
        }

        private void InitializeComponent()
        {
            this.Text = "Kafka Chat - Split View";
            this.Size = new Size(1000, 600);
            this.FormClosing += Form1_FormClosing;

            chatA = new RichTextBox { Location = new Point(10, 10), Size = new Size(460, 400), ReadOnly = true };
            inputA = new TextBox { Location = new Point(10, 420), Size = new Size(360, 30) };
            sendA = new Button { Text = "Send (A)", Location = new Point(380, 420), Size = new Size(90, 30) };

            chatB = new RichTextBox { Location = new Point(500, 10), Size = new Size(460, 400), ReadOnly = true };
            inputB = new TextBox { Location = new Point(500, 420), Size = new Size(360, 30) };
            sendB = new Button { Text = "Send (B)", Location = new Point(870, 420), Size = new Size(90, 30) };

            sendA.Click += async (s, e) => await SendMessageAsync("A", inputA.Text);
            sendB.Click += async (s, e) => await SendMessageAsync("B", inputB.Text);

            this.Controls.Add(chatA);
            this.Controls.Add(inputA);
            this.Controls.Add(sendA);
            this.Controls.Add(chatB);
            this.Controls.Add(inputB);
            this.Controls.Add(sendB);
        }

        private async Task SendMessageAsync(string sender, string text)
        {
            if (string.IsNullOrWhiteSpace(text)) return;

            string message = $"{sender}:{text.Trim()}";
            await producer.ProduceAsync(topic, new Message<Null, string> { Value = message });

            if (sender == "A")
            {
                chatA.AppendText("You: " + text + Environment.NewLine);
                inputA.Clear();
            }
            else
            {
                chatB.AppendText("You: " + text + Environment.NewLine);
                inputB.Clear();
            }
        }

        private void StartConsumer()
        {
            Task.Run(() =>
            {
                var consumerConfig = new ConsumerConfig
                {
                    BootstrapServers = "localhost:9092",
                    GroupId = "split-chat-group",
                    AutoOffsetReset = AutoOffsetReset.Earliest
                };

                using var consumer = new ConsumerBuilder<Ignore, string>(consumerConfig).Build();
                consumer.Subscribe(topic);

                try
                {
                    while (!cts.Token.IsCancellationRequested)
                    {
                        var result = consumer.Consume(cts.Token);
                        string msg = result?.Message?.Value;

                        if (!string.IsNullOrEmpty(msg))
                        {
                            string[] parts = msg.Split(':', 2);
                            if (parts.Length == 2)
                            {
                                string sender = parts[0];
                                string message = parts[1];

                                if (sender == "A")
                                    AppendToChat(chatB, "A: " + message);
                                else if (sender == "B")
                                    AppendToChat(chatA, "B: " + message);
                            }
                        }
                    }
                }
                catch (OperationCanceledException)
                {
                    consumer.Close();
                }
            });
        }

        private void AppendToChat(RichTextBox chat, string message)
        {
            if (chat.InvokeRequired)
            {
                chat.Invoke(new Action(() => chat.AppendText(message + Environment.NewLine)));
            }
            else
            {
                chat.AppendText(message + Environment.NewLine);
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            cts.Cancel();
            producer.Dispose();
        }
    }
}
