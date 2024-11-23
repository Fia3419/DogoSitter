using DogoSitter.Api.Data;
using DogoSitter.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DogoSitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DogSittersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public DogSittersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSitters() =>
            Ok(await _context.DogSitters.ToListAsync());

        [HttpPost]
        public async Task<IActionResult> AddSitter(DogSitter sitter)
        {
            _context.DogSitters.Add(sitter);
            await _context.SaveChangesAsync();
            return Ok(sitter);
        }
    }

}
