import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaUser } from 'react-icons/fa';

const About = () => {
  const personalInfo = [
    {
      icon: <FaUser className="text-orange-500" />,
      label: "Nombre",
      value: "Edson Villarroel Ricaldes"
    },
    {
      icon: <FaPhone className="text-orange-500" />,
      label: "Celular",
      value: "+591 73690866",
      href: "tel:+59173690866"
    },
    {
      icon: <FaEnvelope className="text-orange-500" />,
      label: "Correo",
      value: "villarroel@gmail.com",
      href: "mailto:villarroel@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500" />,
      label: "Ubicación",
      value: "Santa Cruz de la Sierra, Bolivia"
    },
    {
      icon: <FaLinkedin className="text-orange-500" />,
      label: "LinkedIn",
      value: "edsonvillarroelricaldes",
      href: "https://www.linkedin.com/in/edsonvillarroelricaldes/"
    },
    {
      icon: <FaGithub className="text-orange-500" />,
      label: "GitHub",
      value: "EdsonVillarroel",
      href: "https://github.com/EdsonVillarroel"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información Personal */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Información Personal
            </h2>
            <div className="space-y-6">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xl">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? "_blank" : undefined}
                        rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Presentación */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              ¡Hola! 👋
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Soy un <strong className="text-orange-500">Desarrollador Frontend</strong> apasionado con experiencia en 
                <strong className="text-orange-500"> Angular</strong>, <strong className="text-orange-500">React.js</strong> y 
                <strong className="text-orange-500"> Next.js</strong>. Me encanta aprender nuevas tecnologías y estoy siempre 
                en busca de nuevos desafíos para ampliar mis habilidades.
              </p>
              <p>
                Actualmente trabajo en <strong className="text-orange-500">BancoSol</strong> como desarrollador Full Stack, 
                enfocado en proyectos de desarrollo web de alta calidad con código limpio y arquitectura modular.
              </p>
              <p>
                Me esfuerzo por mantenerme actualizado con las últimas tendencias y tecnologías, y tengo una sólida 
                comprensión del ciclo de vida completo del desarrollo web. ¡Estoy emocionado de seguir creciendo y 
                aprendiendo como desarrollador!
              </p>
            </div>
            
            {/* Especialidades */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Especialidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Frontend Development', 'Angular', 'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Clean Code', 'Modular Architecture'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
