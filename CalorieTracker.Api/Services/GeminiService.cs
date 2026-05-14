namespace CalorieTracker.Api.Services
{

    using Google.GenAI;
    using Google.GenAI.Types;
    using Microsoft.VisualBasic;
    using CalorieTracker.Api.Models;



    public class GeminiService
    {

        private readonly Client _client;


        public GeminiService(Client client)
        {
            this._client = client;
        }



            public async Task<CalorieEntry> CalculateCalories(string mealPrompt)
        {
            var response = await _client.Models.GenerateContentAsync(
                model: "gemini-3.0-flash",
                contents: mealPrompt
            );

            var content = response.Candidates[0].Content.Parts[0].Text;

            // Here you would parse the content to extract calorie information.
            // This is a placeholder implementation and should be replaced with actual parsing logic.
            var calories = ExtractCaloriesFromContent(content);

            return new CalorieEntry
            {
                MealTitle = mealPrompt,
                MealDescription = mealPrompt,
                Calories = calories,
                Date = DateTime.UtcNow
            };
        }









    public int ExtractCaloriesFromContent(string content)
    {
 
        return 1; 
    }


    


    }



}