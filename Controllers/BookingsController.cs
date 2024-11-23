using DogoSitter.Api.Data;
using DogoSitter.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DogoSitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Bookings
        [HttpGet]
        public async Task<IActionResult> GetAllBookings() =>
            Ok(await _context.Bookings
                .Include(b => b.DogOwner)
                .Include(b => b.DogSitter)
                .ToListAsync());

        // GET: api/Bookings/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBookingById(int id)
        {
            var booking = await _context.Bookings
                .Include(b => b.DogOwner)
                .Include(b => b.DogSitter)
                .FirstOrDefaultAsync(b => b.Id == id);

            if (booking == null) return NotFound();

            return Ok(booking);
        }

        // POST: api/Bookings
        [HttpPost]
        public async Task<IActionResult> AddBooking(Booking booking)
        {
            var ownerExists = await _context.DogOwners.AnyAsync(o => o.Id == booking.DogOwnerId);
            var sitterExists = await _context.DogSitters.AnyAsync(s => s.Id == booking.DogSitterId);

            if (!ownerExists || !sitterExists) return BadRequest("Invalid owner or sitter ID.");

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetBookingById), new { id = booking.Id }, booking);
        }

        // DELETE: api/Bookings/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> CancelBooking(int id)
        {
            var booking = await _context.Bookings.FindAsync(id);
            if (booking == null) return NotFound();

            _context.Bookings.Remove(booking);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

}
