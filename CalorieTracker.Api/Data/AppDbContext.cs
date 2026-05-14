namespace CalorieTracker.Api.Data
{
    using CalorieTracker.Api.Models;
    using Microsoft.EntityFrameworkCore;



    public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<CalorieEntry> CalorieEntries { get; set; }
    public DbSet<MealItem> MealItems { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<MealItem>()
            .HasOne(m => m.CalorieEntry)      
            .WithMany(c => c.MealItems)           
            .HasForeignKey(m => m.EntryId);
    }
}


}