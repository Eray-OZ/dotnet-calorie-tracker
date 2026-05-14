

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

            _context.CalorieEntries.Add(calorieEntry);
            await _context.SaveChangesAsync();

            return Ok(calorieEntry);
           
        }



        [HttpGet]
        public async Task<IActionResult> GetCalorieEntries()
        {
            var entries = await _context.CalorieEntries.ToListAsync();
            return Ok(entries);
        }


    }
}
