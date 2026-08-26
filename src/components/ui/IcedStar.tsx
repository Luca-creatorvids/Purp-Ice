/**
 * Fünfzackiger Stern mit Chrome-Verlauf plus kleinem funkelndem Glint,
 * fürs "Iced Out"-Gefühl in Bewertungs-/Trust-Sektionen.
 */
export function IcedStar({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const gradientId = `iced-star-gradient-${delay}`;

  return (
    <span className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8f8e91" />
            <stop offset="30%" stopColor="#f2f1f2" />
            <stop offset="50%" stopColor="#e6e5e7" />
            <stop offset="70%" stopColor="#f2f1f2" />
            <stop offset="100%" stopColor="#8f8e91" />
          </linearGradient>
        </defs>
        <path
          d="M12 2.5l2.95 6.28 6.85.82-5.1 4.78 1.4 6.87L12 17.77 5.9 21.25l1.4-6.87-5.1-4.78 6.85-.82L12 2.5Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
      <span
        className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-ice-white"
        style={{ animation: `sparkle-twinkle 1.8s ease-in-out ${delay}s infinite` }}
        aria-hidden="true"
      />
    </span>
  );
}
