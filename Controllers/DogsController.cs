using DogoSitter.Api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DogoSitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DogsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DogsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDogs() =>
            Ok(await _context.Dogs.Include(d => d.DogOwner).ToListAsync());

        [HttpPost]
        public async Task<IActionResult> AddDog(Dog dog)
        {
            _context.Dogs.Add(dog);
            await _context.SaveChangesAsync();
            return Ok(dog);
        }
    }
}
