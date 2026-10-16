import Logo from "./Logo";
import { contact, nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-gold/50 bg-white pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs leading-relaxed text-mist">
            Three decades of residential real estate and construction in
            Bhopal. Built on Trust. Designed for Life.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-xs uppercase tracking-[0.3em] text-mustard">Explore</h2>
          <ul className="space-y-3 text-mist">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-mustard">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xs uppercase tracking-[0.3em] text-mustard">Get in Touch</h2>
          <address className="space-y-3 not-italic text-mist">
            <a href={`tel:+${contact.phone.replace(/\D/g, "")}`} className="block hover:text-mustard">
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block break-words hover:text-mustard">
              {contact.email}
            </a>
            <p>{contact.site}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-ink/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-xs text-mist md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Ram Enterprises. All rights reserved.</p>
          <a href="#top" className="uppercase tracking-[0.25em] transition-colors hover:text-mustard">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
