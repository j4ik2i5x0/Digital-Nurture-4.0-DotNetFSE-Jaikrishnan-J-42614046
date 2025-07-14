using Confluent.Kafka;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var config = new ProducerConfig
        {
            BootstrapServers = "localhost:9092"
        };

        Console.WriteLine("💬 Kafka Chat Producer started...");
        Console.WriteLine("Type your message and press Enter (type 'exit' to quit)\n");

        using var producer = new ProducerBuilder<Null, string>(config).Build();

        while (true)
        {
            Console.Write("You: ");
            string input = Console.ReadLine();

            if (input.ToLower() == "exit")
                break;

            try
            {
                var result = await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = input });
                Console.WriteLine($"✅ Message sent to: {result.TopicPartitionOffset}");
            }
            catch (ProduceException<Null, string> ex)
            {
                Console.WriteLine($"❌ Error sending message: {ex.Error.Reason}");
            }
        }

        Console.WriteLine("👋 Exiting producer...");
    }
}
