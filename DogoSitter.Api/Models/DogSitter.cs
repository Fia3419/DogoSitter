namespace DogoSitter.Api.Models
{
    public class DogSitter
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public decimal HourlyRate { get; set; }
        public ICollection<Booking> Bookings { get; set; }
    }
}
