namespace CalorieTracker.Api.Models
{
    public class CalorieEntry
    {
        public int Id { get; set; }
        public string UserId { get; set; } = "default";
        public required string MealTitle { get; set; }
        public required string MealDescription { get; set; }
        public List<MealItem>? MealItems { get; set; }
        public int Calories { get; set; }
        public DateTime Date { get; set; }
    }
}