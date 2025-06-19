using System;

class Program
{
    static void Main()
    {
        double initialAmount = 1500.0;
        double yearlyIncreaseRate = 0.07;
        int forecastPeriod = 6;

        double estimatedValue = PredictFutureValue(initialAmount, yearlyIncreaseRate, forecastPeriod);

        Console.WriteLine($"Estimated amount after {forecastPeriod} years: {estimatedValue:F2}");
    }

    static double PredictFutureValue(double baseAmount, double growthRate, int remainingYears)
    {
        if (remainingYears == 0)
            return baseAmount;

        return PredictFutureValue(baseAmount * (1 + growthRate), growthRate, remainingYears - 1);
    }
}
