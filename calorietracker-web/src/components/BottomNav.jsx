export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-background shadow-[0_-2px_12px_rgba(0,0,0,0.06)] shadow-sm md:hidden">
      <ul className="flex justify-around items-center px-lg py-sm pb-safe">
        <li>
          <a className="flex flex-col items-center justify-center text-primary dark:text-primary-fixed-dim bg-secondary-container/20 dark:bg-secondary-container/10 rounded-full px-4 py-1 hover:text-primary dark:hover:text-primary-fixed transition-all active:scale-95 duration-200" href="#">
            <span className="material-symbols-outlined" data-icon="dashboard" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
            <span className="font-label-sm text-label-sm-mobile">Dashboard</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-tertiary-fixed-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
            <span className="font-label-sm text-label-sm-mobile">Log</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-tertiary-fixed-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="insights">insights</span>
            <span className="font-label-sm text-label-sm-mobile">Analytics</span>
          </a>
        </li>
        <li>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-tertiary-fixed-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed transition-all" href="#">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span className="font-label-sm text-label-sm-mobile">Profile</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
