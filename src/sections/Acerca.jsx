import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaPrayingHands, FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa";
import acerca from "../assets/perfil3.jpg"; 
import { Button } from "../components/Button";

export default function Acerca() {
 
  // Array de principios con icono, título y descripción
  const principios = [
    { icon: <FaPrayingHands size={28} color="#26DAEB" />, titulo: "Fe y propósito", descripcion: "Mi fe guía mi trabajo, buscando crear con integridad y excelencia." },
    { icon: <FaLaptopCode size={28} color="#26DAEB" />, titulo: "Pasión técnica", descripcion: "Amo el desarrollo y el aprendizaje continuo de nuevas tecnologías." },
    { icon: <FaLightbulb size={28} color="#26DAEB" />, titulo: "Creatividad", descripcion: "Resolver problemas complejos con soluciones innovadoras y elegantes." },
    { icon: <FaUsers size={28} color="#26DAEB" />, titulo: "Colaboración", descripcion: "Trabajo en equipo con empatía, comunicación clara y respeto." },
  ];

  return (
    <section id="acerca" className="min-h-screen bg-gray-100 flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-mi-gris-texto">Acerca de mí</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-mi-azul-neon to-mi-beige mx-auto rounded-full"></div>
        </div>

        {/* div Principal para usar las dos columnas*/}
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 items-start">

          {/*Perfil + Principios */}
          <div className="flex flex-col gap-6">

            {/* Perfil */}
            <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img src={acerca} alt="Acerca de Lilis" className="w-32 h-32 rounded-full object-cover shadow-md"/>
              <h2 className="text-xl font-semibold text-gray-800 mt-2">Lili Jhoana Sanchez Portocarrero</h2>
              <span className="text-gray-500 text-sm">Ingeniera de Sistemas</span>
              <div className="mt-3  text-sm text-purple-600">
                Desarrollo Full Stack Junior (Java)
                 <br />
                <span className="text-gray-500">Bootcamp · Generation Colombia</span>
              </div>
            </div>

            {/* Principios generados dinámicamente */}
            {principios.map((p, index) => (
              <div key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
                {p.icon}
                <div>
                  <h2 className="text-xl font-semibold mb-1">{p.titulo}</h2>
                  <p className="text-gray-600">{p.descripcion}</p>
                </div>
              </div>
            ))}

          </div>

          {/* Conectemos + Acerca de mí */}
          <div className="flex flex-col gap-6">

            {/* Conectemos */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">Conectemos</h2>

              <div className="bg-gray-100 bg-opacity-50 p-3 rounded-md shadow-inner text-center mb-4">
                <p className="text-gray-700 text-sm">
                    ¿Tienes un proyecto en mente? ¡Hablemos y colaboremos!
                </p>
              </div>

              <div className="flex justify-around items-center gap-4 text-gray-600">
                <a href="mailto:tuemail@example.com" className="flex flex-col items-center hover:text-[#26DAEB]">
                  <FaEnvelope size={20} />
                  <span className="text-sm mt-1">Correo</span>
                </a>
                <a href="https://www.linkedin.com/in/tu-nombre" target="_blank" className="flex flex-col items-center hover:text-blue-700">
                  <FaLinkedin size={20} />
                  <span className="text-sm mt-1">LinkedIn</span>
                </a>
                <a href="https://wa.me/5211234567890" target="_blank" className="flex flex-col items-center hover:text-green-500">
                  <FaWhatsapp size={20} />
                  <span className="text-sm mt-1">WhatsApp</span>
                </a>
                <a href="https://github.com/tu-usuario" target="_blank" className="flex flex-col items-center hover:text-gray-800">
                  <FaGithub size={20} />
                  <span className="text-sm mt-1">GitHub</span>
                </a>
              </div>
            </div>

            {/* Acerca de mí */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <div className="space-y-4 text-mi-gris-texto">
                <h3 className="text-xl font-semibold">Hola, soy Lili</h3>
                <p className="text-lg leading-7">
                  Soy una mujer apasionada por la tecnología, la lógica y el aprendizaje constante. 
                  Mi fe en Dios guía mi vida y mi trabajo, inspirándome a avanzar con propósito, disciplina y gratitud.
                </p>
                <p className="text-lg leading-7">
                  Recientemente completé un Bootcamp de Desarrollo Web Full Stack Junior con énfasis en Java, donde desarrollé 
                  proyectos prácticos que me permitieron aplicar conceptos fundamentales de backend y frontend. 
                  Durante este proceso adquirí experiencia construyendo aplicaciones web, resolviendo problemas reales y trabajando con tecnologías como Java y Spring Boot.
                </p>
                <p className="text-lg leading-7">
                  Aunque estoy iniciando mi trayectoria profesional en el desarrollo de software, me estoy enfocando en crecer como desarrolladora backend, especialmente con Java, ya que disfruto comprender la arquitectura interna de las aplicaciones y crear soluciones eficientes y bien estructuradas.
                </p>
                <p className="text-lg leading-7">
                Soy una profesional en constante aprendizaje, enfocada en aportar valor en cada proyecto. La tecnología, para mí, es una herramienta para crear soluciones con visión ética y humana.
              </p>

                {/* Botones */}
                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="contactar" href="#contacto" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
