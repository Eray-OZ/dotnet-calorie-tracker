namespace CalorieTracker.Api.Models
{
    public class CalorieEntry
    {
        public int Id { get; set; }
        public required string MealTitle { get; set; }
        public required string MealDescription { get; set; }
        public int Calories { get; set; }
        public DateTime Date { get; set; }
    }
}