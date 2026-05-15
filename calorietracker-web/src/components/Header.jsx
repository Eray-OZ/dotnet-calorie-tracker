export default function Header({ username, onLogout }) {
  return (
    <header className="docked full-width top-0 bg-surface dark:bg-background border-b border-surface-variant dark:border-outline-variant flat no-shadows flex justify-between items-center w-full px-container-margin-mobile md:px-container-margin-desktop h-16">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
        VitalTrack
      </div>
      <div className="flex items-center gap-md">
        {username && (
          <>
            <span className="font-label-md text-label-md text-on-surface-variant hidden sm:block">👋 {username}</span>
            <button
              onClick={onLogout}
              className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-error transition-colors"
              title="Çıkış Yap"
            >
              <span className="material-symbols-outlined text-base">logout</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
}
