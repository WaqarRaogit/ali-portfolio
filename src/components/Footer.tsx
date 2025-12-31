import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8 border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-heading font-bold text-2xl text-primary">
            Ali Faraz
          </div>

          {/* Copyright */}
          <p className="text-sm text-secondary-foreground/70 flex items-center gap-1">
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> by Ali Faraz
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() =>
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
