import { FaGit, FaJava } from "react-icons/fa";
import { SiCss3, SiJavascript, SiMysql, SiReact, SiSpringboot } from "react-icons/si";
import DescargarmiCV from "../components/DescargarMiCV";

export default function Habilidades() {
  const habilidades = [
    { nombre: "JavaScript", nivel: 50, icon: <SiJavascript /> },
    { nombre: "React", nivel: 40, icon: <SiReact /> },
    { nombre: "CSS", nivel: 60, icon: <SiCss3 /> },
    { nombre: "SQL", nivel: 50, icon: <SiMysql /> },
    { nombre: "Java", nivel: 60, icon: <FaJava /> },
    { nombre: "Spring Boot", nivel: 30, icon: <SiSpringboot /> },
    { nombre: "Git", nivel: 60, icon: <FaGit /> },
  ];

  return (
    <section
      id="habilidades"
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-mi-gris-texto">Habilidades</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-mi-azul-neon to-mi-beige mx-auto rounded-full mt-2"></div>
      </div>

      {/* Subtítulo */}
      <p className="text-center mb-10 ">
        Experiencia técnica construida mediante proyectos personales y aprendizaje continuo.
      </p>

      {/* Lista de habilidades */}
      <div className="w-full max-w-2xl space-y-6 ">
        {habilidades.map((h, i) => (
          <div key={i}>
            {/* Nombre + Icono + Porcentaje */}
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2 text-mi-gris-texto">
                <span className="text-xl text-mi-azul-neon">{h.icon}</span>
                <span>{h.nombre}</span>
              </div>
              <span className="text-mi-lila">{h.nivel}%</span>
            </div>

            {/* Barra de progreso */}
            <div className="w-full max-w-2xl bg-gray-200 rounded-full h-2">
            
              <div className="h-2 rounded-full" style={{width: `${h.nivel}%`,
            background: `linear-gradient(to right, #26DAEB 60%, rgba(167,127,255,0.5) 100%)`,}}>
            </div>

            </div>

            
          </div>
        ))}
      </div>

      <DescargarmiCV/>
    </section>
  );
}
