using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql("server=localhost;database=retailinventorydb;user=root;password=12345;", 
            new MySqlServerVersion(new Version(10, 4, 28))); // Adjust version to your MariaDB version
    }
}
