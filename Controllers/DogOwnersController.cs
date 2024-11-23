using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DogoSitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DogOwnersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DogOwnersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/DogOwners
        [HttpGet]
        public async Task<IActionResult> GetAllOwners() =>
            Ok(await _context.DogOwners.Include(o => o.Dogs).ToListAsync());

        // GET: api/DogOwners/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOwnerById(int id)
        {
            var owner = await _context.DogOwners
                .Include(o => o.Dogs)
                .FirstOrDefaultAsync(o => o.Id == id);

            if (owner == null) return NotFound();

            return Ok(owner);
        }

        // POST: api/DogOwners
        [HttpPost]
        public async Task<IActionResult> AddOwner(DogOwner owner)
        {
            _context.DogOwners.Add(owner);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOwnerById), new { id = owner.Id }, owner);
        }

        // PUT: api/DogOwners/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner(int id, DogOwner updatedOwner)
        {
            if (id != updatedOwner.Id) return BadRequest();

            var existingOwner = await _context.DogOwners.FindAsync(id);
            if (existingOwner == null) return NotFound();

            existingOwner.Name = updatedOwner.Name;
            existingOwner.Email = updatedOwner.Email;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/DogOwners/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            var owner = await _context.DogOwners.FindAsync(id);
            if (owner == null) return NotFound();

            _context.DogOwners.Remove(owner);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}
