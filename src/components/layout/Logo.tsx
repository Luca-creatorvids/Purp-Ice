import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** Höhe in px – Breite wird automatisch im Seitenverhältnis berechnet */
  height?: number;
  onClick?: () => void;
};

// Offizielles PURPICE-Logo (public/brand/purpice-logo.png).
// Seitenverhältnis des Original-Assets: 1165 x 234 px.
const LOGO_RATIO = 1165 / 234;

export function Logo({ className = "", height = 32, onClick }: LogoProps) {
  return (
    <Link href="/" className={`shrink-0 ${className}`} aria-label="PURPICE Startseite" onClick={onClick}>
      <Image
        src="/brand/purpice-logo.png"
        alt="PURPICE"
        width={Math.round(height * LOGO_RATIO)}
        height={height}
        priority
        className="h-auto w-auto"
        style={{ height, width: "auto" }}
      />
    </Link>
  );
}
