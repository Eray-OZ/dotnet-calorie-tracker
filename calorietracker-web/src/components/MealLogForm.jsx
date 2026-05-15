import { api } from "../api";
import { useState, useEffect } from "react";




export default function MealLogForm({ username, onMealAdded }) {



  const [loading, setLoading] = useState(false);



  const insertMealEntry = async () => {
    const mealInput = document.getElementById("meal-input");
    const mealTypeInput = document.getElementById("meal-type-input");
    const mealDescription = mealInput.value.trim();
    const mealType = mealTypeInput.value.trim();

    if (!mealDescription || !mealType) {
      alert("Please enter meal details and type.");
      return;
    }

    try {
      setLoading(true);
      await api.addCalorieEntry({
        MealTitle: mealType,
        MealDescription: mealDescription,
      }, username);
      alert("Meal added successfully!");
      mealInput.value = "";
      mealTypeInput.value = "";
      if (onMealAdded) onMealAdded();
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };






  return (
    <section className="bg-surface-container-lowest rounded-xl p-lg md:p-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-surface-variant">
      
      
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Add Meal</h2>
      
      
      <div className="space-y-md">
        <div>
          <label className="sr-only" htmlFor="meal-input">Meal Details</label>
          <textarea 
            className="w-full bg-[#F1F5F9] border border-outline-variant rounded-lg p-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
            id="meal-input" 
            placeholder="e.g., 2 eggs, 1 tomato, 1 slice whole wheat bread..." 
            rows="3"
          ></textarea>
        </div>



        <div className="flex justify-between items-center flex-wrap gap-md">
          <div className="flex-1 min-w-[200px]">
            <label className="sr-only" htmlFor="meal-type-input">Meal Type</label>
            <input 
              className="w-full bg-[#F1F5F9] border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              id="meal-type-input" 
              placeholder="Meal Type (e.g., Snack, Dinner)" 
              type="text"
            />
          </div>


          <button className="bg-primary text-on-primary font-label-md text-label-md px-xl py-md rounded-lg flex items-center justify-center min-h-[48px] hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm" 
          onClick={insertMealEntry} disabled={loading}>
            {loading ? "Analyzing..." : "Analyze"}
            <span className="material-symbols-outlined ml-sm text-[20px]">auto_awesome</span>
          </button>
        </div>
      </div>
    </section>
  );
}
