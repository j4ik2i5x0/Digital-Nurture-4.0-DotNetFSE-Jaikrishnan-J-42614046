using Confluent.Kafka;
using System;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "chat-consumer-group",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
        consumer.Subscribe("chat-topic");

        Console.WriteLine("📥 Kafka Chat Consumer started. Listening for messages...");
        Console.WriteLine("Press Ctrl+C to stop.\n");

        try
        {
            while (true)
            {
                var result = consumer.Consume(CancellationToken.None);
                Console.WriteLine($"👤 Friend: {result.Message.Value}");
            }
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("⛔ Consumer stopped.");
            consumer.Close();
        }
    }
}
