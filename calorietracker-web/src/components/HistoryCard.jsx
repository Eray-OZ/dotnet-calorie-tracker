import { useEffect, useState } from "react";
import { api } from "../api";





export default function HistoryCard() {



  const [entries, setEntries] = useState([]);


  useEffect(() => {
    const fetchEntries = async () => {
      const data = await api.getCalorieEntries();
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(data);
    };
    fetchEntries();
  }, [entries]);




  return (
    <section>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">History</h2>
      <div className="space-y-lg">
        {/* Date Group */}

        {entries.map(entry => (
          <div key={entry.id}>
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">
              {new Date(entry.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}
            </h3>
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-surface-variant overflow-hidden">
              <div className="border-b border-surface-variant last:border-b-0 p-lg">
                <div className="flex justify-between items-center mb-md">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                    {entry.mealTitle} {entry.mealDescription && <span className="font-label-md text-label-md text-on-surface-variant">- {entry.mealDescription}</span>}
                  </h4>
                </div>
                <ul className="space-y-sm mb-md">
                  {entry.mealItems?.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                      <span className="font-body-md text-body-md text-on-surface">{item.itemName}</span>
                      <span className="font-label-md text-label-md text-on-surface-variant">{item.calorie} kcal</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-sm border-t border-surface-variant">
                  <span className="font-label-md text-label-md text-on-surface">Total Calories</span>
                  <span className="font-headline-sm text-headline-sm text-primary">{entry.calories} kcal</span>
                </div>
              </div>
            </div>
          </div>
        ))}


        {/* Date Group Previous */}

      </div>
    </section>
  );
}
