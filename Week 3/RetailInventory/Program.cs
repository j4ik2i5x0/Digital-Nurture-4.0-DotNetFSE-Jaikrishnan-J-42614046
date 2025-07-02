// Inserting Data

// using var context = new AppDbContext();

// var electronics = new Category { Name = "Electronics" };
// var groceries = new Category { Name = "Groceries" };

// await context.Categories.AddRangeAsync(electronics, groceries);

// var product1 = new Product { Name = "Laptop", Price = 75000, Category = electronics };
// var product2 = new Product { Name = "Rice Bag", Price = 1200, Category = groceries };

// await context.Products.AddRangeAsync(product1, product2);
// await context.SaveChangesAsync();

// Console.WriteLine("Initial data inserted.");


using Microsoft.EntityFrameworkCore;
using RetailInventory;

using var context = new AppDbContext();

// Retrieve All Products
var products = await context.Products.Include(p => p.Category).ToListAsync();
Console.WriteLine("\n--- All Products ---");
foreach (var p in products)
{
    Console.WriteLine($"{p.Name} - ₹{p.Price} - Category: {p.Category?.Name}");
}

// Find by ID
var product = await context.Products.FindAsync(1);
Console.WriteLine($"\nFound by ID 1: {product?.Name}");

// FirstOrDefault with Condition
var expensive = await context.Products.FirstOrDefaultAsync(p => p.Price > 50000);
Console.WriteLine($"\nExpensive Product (> ₹50,000): {expensive?.Name}");
