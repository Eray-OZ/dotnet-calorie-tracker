export default function Header() {
  return (
    <header className="docked full-width top-0 bg-surface dark:bg-background border-b border-surface-variant dark:border-outline-variant flat no-shadows flex justify-between items-center w-full px-container-margin-mobile md:px-container-margin-desktop h-16">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
        VitalTrack
      </div>
      <div className="flex items-center gap-md">
        <button className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full p-2">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
        </button>
        <button className="text-on-surface-variant dark:text-on-tertiary-fixed-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors rounded-full p-2">
          <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
        </button>
      </div>
    </header>
  );
}
