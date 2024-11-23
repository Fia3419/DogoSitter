using Microsoft.AspNetCore.Mvc;

namespace DogoSitter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AppDbContext _context;

        public AuthenticationController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/Authentication/Register
        [HttpPost("Register")]
        public async Task<IActionResult> Register(string email, string password)
        {
            // Add logic to hash password and save user details in the database
            return Ok(new { Message = "User registered successfully" });
        }

        // POST: api/Authentication/Login
        [HttpPost("Login")]
        public IActionResult Login(string email, string password)
        {
            // Add logic to verify user and generate JWT token
            return Ok(new { Token = "YourJWTTokenHere" });
        }
    }

}
