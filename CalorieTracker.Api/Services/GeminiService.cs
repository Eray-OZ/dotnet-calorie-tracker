namespace CalorieTracker.Api.Services
{

    using Google.GenAI;
    using Google.GenAI.Types;
    using Microsoft.VisualBasic;
    using CalorieTracker.Api.Models;



    public class GeminiService
    {

        private readonly Client _client;


        private readonly string promptBase = """
        Analyze the following meal.
        Provide the estimated calories for each item in a simple list format.
        You MUST respond ONLY with the list in this exact style, one item per line:
        ItemName: CalorieValue
        Do not write any intro, outro, or additional text. Just the list.
        """;


        public GeminiService(Client client)
        {
            this._client = client;
        }



            public async Task<CalorieEntry> CalculateCalories(string mealPrompt, string mealTitle)
        {


            string prompt = promptBase + "\nMeal:" + mealPrompt;

            var response = await _client.Models.GenerateContentAsync(
                model: "gemini-3.1-flash-lite",
                contents: prompt
            );

            var content = response.Candidates?[0]?.Content?.Parts?[0].Text;


            var calories = ExtractCaloriesFromContent(content);

            return new CalorieEntry
            {
                MealTitle = mealTitle,
                MealDescription = content,
                Calories = calories,
                Date = DateTime.UtcNow
            };
        }









    public int ExtractCaloriesFromContent(string content)
    {
 
        var lines = content.Split('\n');
        int totalCalories = 0;
        foreach (var line in lines)
        {
            var parts = line.Split(':');
            if (parts.Length == 2)
            {
                var caloriePart = parts[1].Trim();
                if (int.TryParse(caloriePart, out int calories))
                {
                    totalCalories += calories;
                }
            }
        }
        return totalCalories; 
    }





    }



}