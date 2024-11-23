namespace DogoSitter.Api.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public int DogOwnerId { get; set; }
        public int DogSitterId { get; set; }
        public DogSitter DogSitter { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
         public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public DogOwner DogOwner { get; set; }
    }
}
