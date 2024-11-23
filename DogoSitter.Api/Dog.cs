namespace DogoSitter
{
    public class Dog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Breed { get; set; }
        public int Age { get; set; }
        public string Size { get; set; } // e.g., Small, Medium, Large
        public int DogOwnerId { get; set; }
        public DogOwner DogOwner { get; set; }
    }
}
