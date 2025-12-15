import { useState, useEffect } from "react";
import logo from "../assets/lili_Dev.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#inicio" },
     { label: "Acerca de mí", href: "#acerca" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Reflexión", href: "#reflexion" },
   
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-gray-800" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20" />
          <h1 className="text-2xl font-bold text-white">Lili Sanchez</h1>
        </div>
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-purple-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
