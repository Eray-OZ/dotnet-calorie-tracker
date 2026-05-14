import Header from './components/Header';
import MealLogForm from './components/MealLogForm';
import HistoryCard from './components/HistoryCard';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-container-margin-mobile md:px-container-margin-desktop py-lg space-y-xl">
        {/* Header Section */}
        <div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">Günlük Özet</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Bugün ne yediğinizi takip edin.</p>
        </div>

        {/* Logging Interface */}
        <MealLogForm />

        {/* History Table */}
        <HistoryCard />
      </main>
      <BottomNav />
    </>
  );
}

export default App;
