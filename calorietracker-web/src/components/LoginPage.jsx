import { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed) {
      setError("Lütfen bir kullanıcı adı girin.");
      return;
    }
    localStorage.setItem("vitaltrack_user", trimmed);
    onLogin(trimmed);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-container-margin-mobile">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-md">
            <span className="material-symbols-outlined text-primary text-4xl">nutrition</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold">VitalTrack</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Kalori takibine başlamak için devam et</p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest border border-surface-variant rounded-2xl p-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] space-y-lg"
        >
          <div className="space-y-xs">
            <label htmlFor="username" className="font-label-md text-label-md text-on-surface-variant block">
              Kullanıcı Adı
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => { setUsername(e.target.value); setError(""); }}
              placeholder="Adınızı girin..."
              autoFocus
              className="w-full bg-surface border border-surface-variant rounded-xl px-md py-sm font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {error && (
              <p className="font-label-sm text-label-sm text-error">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-label-lg text-label-lg rounded-xl py-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            Devam Et
          </button>
        </form>
      </div>
    </div>
  );
}
