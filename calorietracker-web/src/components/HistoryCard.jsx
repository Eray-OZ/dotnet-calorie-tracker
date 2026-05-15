import { useEffect, useState } from "react";
import { api } from "../api";





export default function HistoryCard({ username, refreshKey }) {



  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchEntries = async () => {
      const data = await api.getCalorieEntries(username);
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setEntries(data);
    };
    
    try {
      fetchEntries();
    } catch {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false)
    }

  }, [refreshKey]);




  const deleteEntry = async (id) => {
    setDeletingId(id);
    try {
      await api.deleteEntry(id);
      setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id));
    } catch (error) {
      console.error("Error deleting entry:", error);
    } finally {
      setDeletingId(null);
    }
  }



  if (loading) {
    return (
      <section>
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">History</h2>
        <div className="space-y-lg">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-surface-container-lowest rounded-xl border border-surface-variant p-lg animate-pulse">
              <div className="flex justify-between items-center mb-md">
                <div className="h-3 bg-surface-variant rounded w-24"></div>
                <div className="h-4 w-4 bg-surface-variant rounded"></div>
              </div>
              <div className="space-y-sm">
                <div className="h-3 bg-surface-variant rounded w-3/4"></div>
                <div className="h-3 bg-surface-variant rounded w-1/2"></div>
                <div className="h-3 bg-surface-variant rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">History</h2>
      <div className="space-y-lg">
        {/* Date Group */}

        {entries.map(entry => (
          <div key={entry.id}>
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm flex justify-between items-center">
              <span>{new Date(entry.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' })}</span>
              {deletingId === entry.id ? (
                <span className="material-symbols-outlined animate-spin opacity-70">progress_activity</span>
              ) : (
                <button onClick={() => deleteEntry(entry.id)} className="hover:opacity-70 transition-opacity flex items-center">
                  <span className="material-symbols-outlined" data-icon="delete">delete</span>
                </button>
              )}
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
