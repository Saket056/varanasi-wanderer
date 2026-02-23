const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-saffron mb-3">Dhoomchalle</h3>
          <p className="font-sans text-sm text-background/60">
            Your ultimate travel companion for exploring the spiritual heart of India — Varanasi.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold text-background mb-3 uppercase tracking-wider">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Places", "Food", "Transport", "Guides"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-sm text-background/60 hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold text-background mb-3 uppercase tracking-wider">Contact</h4>
          <p className="font-sans text-sm text-background/60">Varanasi, Uttar Pradesh, India</p>
          <p className="font-sans text-sm text-background/60">info@dhoomchalle.com</p>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center">
        <p className="font-sans text-xs text-background/40">
          © 2026 Dhoomchalle. Made with ❤️ for travelers exploring Varanasi.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
