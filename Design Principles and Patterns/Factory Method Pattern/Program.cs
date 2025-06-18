using System;

public interface IDocument
{
    void Open();
}

public class WordDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Word Document...");
    }
}

public class PdfDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening PDF Document...");
    }
}

public class ExcelDocument : IDocument
{
    public void Open()
    {
        Console.WriteLine("Opening Excel Document...");
    }
}

public abstract class DocumentFactory
{
    public abstract IDocument CreateDocument();
}

public class WordFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new WordDocument();
    }
}

public class PdfFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new PdfDocument();
    }
}

public class ExcelFactory : DocumentFactory
{
    public override IDocument CreateDocument()
    {
        return new ExcelDocument();
    }
}

public class Program
{
    public static void Main()
    {
        DocumentFactory wordDocFactory = new WordFactory();
        IDocument wordDoc = wordDocFactory.CreateDocument();
        wordDoc.Open();

        DocumentFactory pdfDocFactory = new PdfFactory();
        IDocument pdfDoc = pdfDocFactory.CreateDocument();
        pdfDoc.Open();

        DocumentFactory excelDocFactory = new ExcelFactory();
        IDocument excelDoc = excelDocFactory.CreateDocument();
        excelDoc.Open();
    }
}
