

namespace CalorieTracker.Api.Controllers
{

    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using CalorieTracker.Api.Data;
    using CalorieTracker.Api.Models;
    using CalorieTracker.Api.Services;

    [Route("api/[controller]")]
    [ApiController]
    public class CalorieController : ControllerBase
    {
        
        private readonly AppDbContext _context;
        private readonly GeminiService _geminiService;


        public CalorieController(AppDbContext context, GeminiService geminiService)
        {
            this._context = context;
            this._geminiService = geminiService;
        }


        [HttpPost]
        public async Task<IActionResult> AddCalorieEntry([FromBody] string mealPrompt, [FromQuery] string mealTitle)
        {
            var calorieEntry = await _geminiService.CalculateCalories(mealPrompt, mealTitle);

            _context.CalorieEntries.Add(calorieEntry);
            _context.SaveChanges();

            return Ok(calorieEntry);
           
        }





    }
}
