export const projects = [
  {
    title: "Sistema de Reservas",
    description: "Aplicación full-stack para gestionar reservas...",
    context: "Proyecto creado para aprender arquitectura cliente-servidor...",
    role: "Desarrollador Full Stack",
    technologies: ["React", "Vite", "Tailwind", "Java", "Spring Boot"],
    challenges: [
      "Sincronización de horarios con backend",
      "Validaciones avanzadas de fecha y hora",
      "Consumo de API REST"
    ],
    solutions: [
      "Implementación de hooks personalizados",
      "Optimización del fetch de datos",
      "Sistema de validación con Zod"
    ],
    images: ["/img/proyecto1-1.png", "/img/proyecto1-2.png"],
    demo: "https://mi-demo.com",
    github: "https://github.com/miusuario/proyecto1"
  },



  {
  title: "MetaTrack",
  description:
    "Aplicación web para gestionar objetivos personales, metas y tareas. Diseñada como una to-do list avanzada para practicar manipulación compleja del DOM usando JavaScript, HTML, CSS y Bootstrap.",
  
  context:
    "Proyecto creado para fortalecer habilidades de frontend sin frameworks, especialmente manejo del DOM, diseño responsivo con Bootstrap y almacenamiento local de datos.",
  
  role: "Desarrollador Frontend",
  
  technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  
  challenges: [
    "Crear una estructura jerárquica dinámica entre objetivos, metas y tareas usando solo DOM API.",
    "Gestionar eventos en elementos generados dinámicamente.",
    "Mantener persistencia de datos sin usar backend.",
    "Evitar duplicación de código en la creación de tarjetas y listas."
  ],
  
  solutions: [
    "Implementación de funciones reutilizables para crear tarjetas y listas de manera modular.",
    "Delegación de eventos para manejar interacciones en elementos generados dinámicamente.",
    "Uso de localStorage para persistir los datos entre sesiones.",
    "Estructuración de datos mediante IDs únicos para relacionar objetivos, metas y tareas."
  ],
  
  images: [
    "/img/metatrack-home.png",
    "/img/metatrack-meta-detail.png"
  ],
  
  demo: "https://mi-demo-metatrack.com",
  github: "https://github.com/miusuario/metatrack"
}








];
