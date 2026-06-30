const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hrishikesh-pachore" },
  { label: "WhatsApp", href: "https://wa.me/447407833953" },
  { label: "Email", href: "mailto:hrishikesh.pachore@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-[#1e1e1e] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <span className="font-sans text-xs text-[#666]">
        © {new Date().getFullYear()} Hrishikesh Pachore
      </span>

      <ul className="flex flex-wrap gap-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[#3a3a3a] hover:text-[#a78bfa] transition-colors duration-200 tracking-wide"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="font-sans text-xs text-[#222]">Pune · Global</span>
    </footer>
  );
}
