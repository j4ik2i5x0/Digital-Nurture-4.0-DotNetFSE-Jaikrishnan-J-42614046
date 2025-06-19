using System;
using System.Linq;

class Program
{
    static void Main()
    {
        Item[] itemList = {
            new Item(101, "Tablet", "Gadgets"),
            new Item(102, "Jeans", "Apparel"),
            new Item(103, "Camera", "Gadgets"),
            new Item(104, "Notebook", "Stationery")
        };

        Console.WriteLine("Linear Search:");
        var linearResult = LinearSearch(itemList, "Camera");
        Console.WriteLine(linearResult != null ? $"Found: {linearResult.ItemName}" : "Not Found");

        var sortedItems = itemList.OrderBy(i => i.ItemName).ToArray();

        Console.WriteLine("Binary Search:");
        var binaryResult = BinarySearch(sortedItems, "Camera");
        Console.WriteLine(binaryResult != null ? $"Found: {binaryResult.ItemName}" : "Not Found");
    }

    static Item LinearSearch(Item[] items, string name)
    {
        foreach (var i in items)
        {
            if (i.ItemName.Equals(name, StringComparison.OrdinalIgnoreCase))
                return i;
        }
        return null;
    }

    static Item BinarySearch(Item[] items, string name)
    {
        int left = 0;
        int right = items.Length - 1;
        while (left <= right)
        {
            int mid = (left + right) / 2;
            int compareResult = string.Compare(items[mid].ItemName, name, StringComparison.OrdinalIgnoreCase);
            if (compareResult == 0) return items[mid];
            else if (compareResult < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}

public class Item
{
    public int ItemId { get; set; }
    public string ItemName { get; set; }
    public string ItemCategory { get; set; }

    public Item(int id, string name, string category)
    {
        ItemId = id;
        ItemName = name;
        ItemCategory = category;
    }
}
