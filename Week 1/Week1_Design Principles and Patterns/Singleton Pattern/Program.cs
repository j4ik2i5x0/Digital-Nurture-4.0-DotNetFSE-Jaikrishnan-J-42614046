using System;

public class Logger
{
    private static Logger? _instance = null;

    private Logger()
    {
        Console.WriteLine("Logger instance created.");
    }

    public static Logger GetInstance()
    {
        if (_instance == null)
        {
            _instance = new Logger();
        }
        return _instance;
    }

    public void Log(string message)
    {
        Console.WriteLine("Log Message: " + message);
    }
}

public class Program
{
    public static void Main()
    {
        Logger logger1 = Logger.GetInstance();
        logger1.Log("This is the first message.");

        Logger logger2 = Logger.GetInstance();
        logger2.Log("This is the second message.");

        if (logger1 == logger2)
        {
            Console.WriteLine("Both logger1 and logger2 refer to the same instance.");
        }
    }
}
