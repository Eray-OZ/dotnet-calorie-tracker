using System.Text.Json.Serialization;

namespace CalorieTracker.Api.Models
{
    public class MealItem
    {
        public int Id { get; set; }
        public int EntryId { get; set; }
        public required string ItemName { get; set; }
        public int Calorie { get; set; }
        [JsonIgnore]
        public CalorieEntry? CalorieEntry { get; set; }
   
    }
}