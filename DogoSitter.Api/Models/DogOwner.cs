namespace DogoSitter
{
    public class DogOwner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public ICollection<Dog> Dogs { get; set; } // Navigation property
    }

}
