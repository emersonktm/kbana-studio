import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoKbana from "@/assets/Logo_kbana_home.png";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover-scale">
            <img src={logoKbana} alt="Kbana Design" className="w-[92px] h-[75px] object-contain" />
          </Link>

          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/servicos"
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/servicos") ? "text-primary" : "text-foreground"
                }`}
              >
                serviços
              </Link>
            </li>
            <li>
              <Link
                to="/quem-sou"
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/quem-sou") ? "text-primary" : "text-foreground"
                }`}
              >
                QuemSou?
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  isActive("/contato") ? "text-primary" : "text-foreground"
                }`}
              >
                contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
