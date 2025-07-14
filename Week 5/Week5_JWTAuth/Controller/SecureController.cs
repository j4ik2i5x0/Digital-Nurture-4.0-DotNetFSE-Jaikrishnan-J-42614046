using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Week5_JWTAuth.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SecureController : ControllerBase
    {
        [HttpGet("data")]
        public IActionResult GetSecureData()
        {
            var username = User.Identity?.Name;
            return Ok($"✅ This is protected data. Hello, {username}!");
        }
    }
}
