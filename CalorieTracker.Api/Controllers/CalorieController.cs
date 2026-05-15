

namespace CalorieTracker.Api.Controllers
{

    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using CalorieTracker.Api.Data;
    using CalorieTracker.Api.Models;
    using CalorieTracker.Api.Services;
    using Microsoft.EntityFrameworkCore;

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
        public async Task<IActionResult> AddCalorieEntry([FromBody] CalorieEntry request)
        {
            var calorieEntry = await _geminiService.CalculateCalories(request.MealDescription, request.MealTitle);

            calorieEntry.UserId = request.UserId ?? "default";

            _context.CalorieEntries.Add(calorieEntry);
            await _context.SaveChangesAsync();

            return Ok(calorieEntry);
           
        }



        [HttpGet]
        public async Task<IActionResult> GetCalorieEntries([FromQuery] string userId = "default")
        {
            var entries = await _context.CalorieEntries
            .Include(c => c.MealItems)
            .Where(c => c.UserId == userId)
            .ToListAsync();
            return Ok(entries);
        }




        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCalorieEntry(int id)
        {
            var entry = await _context.CalorieEntries.FindAsync(id);
            if (entry == null)
            {
                return NotFound();
            }

            _context.CalorieEntries.Remove(entry);
            await _context.SaveChangesAsync();

            return NoContent();
        }



    }
}
