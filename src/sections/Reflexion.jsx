export default function Reflexion() {
  return (
    <section id="reflexion" className="min-h-screen bg-white flex flex-col items-center justify-center p-6"
    >
      {/* Título */}
      <div className="text-center mb-5">
        <h2 className="text-3xl font-semibold text-mi-gris-texto">Reflexión y Visión</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-mi-azul-neon to-mi-beige mx-auto rounded-full mt-2"></div>
      </div>

      {/* Card */}
     <div className="w-full max-w-4xl bg-gray-100 rounded-xl shadow-lg p-6 flex flex-col text-left mt-10">
        <p className="text-mi-gris-texto pb-3 leading-relaxed">
         Mi camino como desarrollador ha sido un viaje de crecimiento constante. Cada proyecto, cada desafío y cada línea de código me han enseñado no solo sobre tecnología, sino también sobre perseverancia, humildad y la importancia de trabajar con propósito.
            Como creyente, mi fe me ha dado una perspectiva única sobre mi trabajo. No se trata solo de escribir código; se trata de servir, de crear herramientas que faciliten la vida de otros y de hacerlo con integridad y excelencia. Cada proyecto es una oportunidad para honrar los talentos que he recibido.
            Mirando hacia el futuro, me entusiasma seguir creciendo, aprendiendo y contribuyendo al mundo de la tecnología. Mi meta es no solo ser una mejor desarrolladora, sino también un mejor ser humano que usa sus habilidades para hacer una diferencia positiva.
        </p>

        <hr className="my-6 border-gray-300 w-full" />

        <p className="text-mi-lila italic text-lg text-center">
          "El trabajo bien hecho no solo refleja habilidad, sino también el corazón de quien lo realiza."
        </p>

        <span className="italic mt-2 text-gray-400 text-sm text-center">— Reflexión personal</span>
      </div>
    </section>
  );
}
