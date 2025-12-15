import { CardProyecto } from "../components/CardProyecto";
import { FaBootstrap, FaHtml5, FaCss3Alt, FaJs,FaJava, FaTerminal } from "react-icons/fa";
import { SiIntellijidea } from "react-icons/si";
import portada1 from "../assets/portada1.png"


const proyectos = [
  {
    titulo: "Aplicación de Gestión de Objetivos MetraTrack",
    subtitulo: "Frontend",
    descripcion:
      "Aplicación para crear objetivos y metas. A partir de las metas se crean hábitos. En este proyecto se muestra el manejo del DOM.",
    tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    web: "#",
    github: "#",
    imgProyecto: portada1, 
  },
  {
    titulo: "Carrito de Compras",
    subtitulo: "API REST - LocalStorage",
    descripcion:
      "Aplicación de carrito de compras. Los productos se obtienen desde una API REST pública y el carrito se gestiona mediante LocalStorage para persistir el estado del usuario sin necesidad de backend.",
    tecnologias: [FaHtml5, FaCss3Alt, FaJs, FaBootstrap],
    web: "#",
    github: "#",
    imgProyecto: portada1,
  },
  {
    titulo: "Sistema de Reservas",
    subtitulo: "Backend",
    descripcion:
      "Aplicación desarrollada en Java puro, orientada a la gestión de reservas desde consola. Implementa POO, uso de ArrayList y lógica de negocio para crear, listar, editar y eliminar reservas.",
    tecnologias: [FaJava, SiIntellijidea, FaTerminal],
    web: "#",
    github: "#",
    imgProyecto: portada1,
  },
  {
    titulo: "Sistema de Pagos",
    subtitulo: "Backend",
    descripcion:
      "Sistema de pagos desarrollado en Java puro que simula distintos métodos de pago implementando herencia y polimorfismo.",
    tecnologias: [FaJava, SiIntellijidea, FaTerminal],
    web: "#",
    github: "#",
    imgProyecto: portada1,
  },
];

export default function Portafolio() {
  return (
    <section id="portafolio" className="min-h-screen bg-[#fffff079] flex flex-col items-center py-10">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-mi-gris-texto">Mi Portafolio</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-mi-azul-neon to-mi-beige mx-auto rounded-full"></div>
      </div>

      {/* card de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl w-full px-4">
        {proyectos.map((p, i) => (
          <CardProyecto key={i} proyecto={p} />
        ))}
      </div>
    </section>
  );
}
