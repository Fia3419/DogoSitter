using Microsoft.EntityFrameworkCore;
using DogoSitter.Api.Models;

namespace DogoSitter.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
             { 

             }
        public DbSet<DogOwner> DogOwners { get; set; }
        public DbSet<DogSitter> DogSitters { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Dog> Dogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<DogSitter>()
                .Property(ds => ds.HourlyRate)
                .HasPrecision(18, 2); // Adjust precision as necessary
        }


    }

}
