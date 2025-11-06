export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <h1 className="text-4xl font-bold mb-2">💻 Anderson Mera</h1>
        <p className="text-lg mb-4">
          Ingeniero en Tecnologías de la Información | Desarrollador Frontend con React 
        </p>
        <a
          href="https://github.com/Anderson0619"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ver GitHub
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="leading-relaxed">
          Soy Ingeniero en Tecnologías de la Información con experiencia en desarrollo
          frontend utilizando React, Next.js y TailwindCSS. Actualmente curso una Maestría
          en Ingeniería en Matemáticas y Computación, enfocándome en optimización y análisis
          de datos. Me apasiona construir interfaces intuitivas y eficientes que conecten
          la tecnología con las personas.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Tecnologías</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "React",
              "Next.js",
              "NestJS",
              "GraphQL",
              "TypeScript",
              "JavaScript",
              "MongoDB",
              "MySQL",
              "Firebase",
              "TailwindCSS",
              "Node.js",
              "Git / GitHub"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-2 bg-gray-200 rounded-lg text-center text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Certificaciones</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>📘 JavaScript Profesional - Platzi</li>
          <li>⚛️ React.js Avanzado - Platzi</li>
          <li>🧩 Next.js - Nest js</li>
          <li>🎓 Maestría en Ingeniería en Matemáticas y Computación (en curso)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Proyectos Destacados</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://github.com/Anderson0619/mi-proyecto-1"
              target="_blank"
              rel="noreferrer"
              className="p-4 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">Sistema de Control de Producción</h3>
              <p className="text-sm text-gray-600">
                Aplicación web desarrollada con React, NestJS y GraphQL para la gestión de procesos productivos.
              </p>
            </a>

            <a
              href="https://github.com/Anderson0619/mi-proyecto-2"
              target="_blank"
              rel="noreferrer"
              className="p-4 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">Dashboard Analítico</h3>
              <p className="text-sm text-gray-600">
                Panel interactivo con visualizaciones dinámicas usando Recharts y MongoDB.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p className="mb-2">📧 andersonmera.dev@gmail.com</p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://linkedin.com/in/andersonmera"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Anderson0619"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
