namespace DogoSitter
{
    public class Booking
    {
        public int Id { get; set; }
        public int DogOwnerId { get; set; }
        public int DogSitterId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DogOwner DogOwner { get; set; }
        public DogSitter DogSitter { get; set; }
    }
}
