export default function HistoryCard() {
  return (
    <section>
      <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Geçmiş</h2>
      <div className="space-y-lg">
        {/* Date Group */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Bugün, 24 Ekim</h3>
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-surface-variant overflow-hidden">
            {/* Meal Group: Breakfast */}
            <div className="border-b border-surface-variant last:border-b-0 p-lg">
              <div className="flex justify-between items-center mb-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">restaurant</span>
                  Kahvaltı
                </h4>
              </div>
              <ul className="space-y-sm mb-md">
                <li className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                  <span className="font-body-md text-body-md text-on-surface">Yumurta (2)</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">140 kcal</span>
                </li>
                <li className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                  <span className="font-body-md text-body-md text-on-surface">Domates (1)</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">22 kcal</span>
                </li>
                <li className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                  <span className="font-body-md text-body-md text-on-surface">Kepek Ekmeği (1 dilim)</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">65 kcal</span>
                </li>
              </ul>
              <div className="flex justify-between items-center pt-sm border-t border-surface-variant">
                <span className="font-label-md text-label-md text-on-surface">Toplam Kalori</span>
                <span className="font-headline-sm text-headline-sm text-primary">227 kcal</span>
              </div>
            </div>

            {/* Meal Group: Lunch */}
            <div className="border-b border-surface-variant last:border-b-0 p-lg">
              <div className="flex justify-between items-center mb-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">lunch_dining</span>
                  Öğle Yemeği
                </h4>
              </div>
              <ul className="space-y-sm mb-md">
                <li className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                  <span className="font-body-md text-body-md text-on-surface">Izgara Tavuk Göğsü (150g)</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">248 kcal</span>
                </li>
                <li className="flex justify-between items-center py-xs border-b border-surface-variant border-dashed last:border-b-0">
                  <span className="font-body-md text-body-md text-on-surface">Kinoa Salatası (1 porsiyon)</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">220 kcal</span>
                </li>
              </ul>
              <div className="flex justify-between items-center pt-sm border-t border-surface-variant">
                <span className="font-label-md text-label-md text-on-surface">Toplam Kalori</span>
                <span className="font-headline-sm text-headline-sm text-primary">468 kcal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Date Group Previous */}
        <div className="opacity-80">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-sm">Dün, 23 Ekim</h3>
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-surface-variant overflow-hidden">
            <div className="p-lg flex justify-between items-center">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface">Günlük Toplam</div>
                  <div className="font-body-md text-body-md text-on-surface-variant">3 Öğün</div>
                </div>
              </div>
              <div className="font-headline-sm text-headline-sm text-on-surface">1,850 kcal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
