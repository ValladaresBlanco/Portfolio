import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>
        © {year} · {profile.name} {profile.lastName}
      </span>
    </footer>
  );
}
