namespace CalorieTracker.Api.Data
{
    using CalorieTracker.Api.Models;
    using Microsoft.EntityFrameworkCore;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<CalorieEntry> CalorieEntries { get; set; }
    }
}