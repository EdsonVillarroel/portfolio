import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-orange-500" />,
      label: "Email",
      value: "villarroel@gmail.com",
      href: "mailto:villarroel@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl text-orange-500" />,
      label: "Teléfono",
      value: "+591 73690866",
      href: "tel:+59173690866"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-orange-500" />,
      label: "Ubicación",
      value: "Santa Cruz de la Sierra, Bolivia",
      href: null
    },
    {
      icon: <FaLinkedin className="text-2xl text-orange-500" />,
      label: "LinkedIn",
      value: "edsonvillarroelricaldes",
      href: "https://www.linkedin.com/in/edsonvillarroelricaldes/"
    },
    {
      icon: <FaGithub className="text-2xl text-orange-500" />,
      label: "GitHub",
      value: "EdsonVillarroel",
      href: "https://github.com/EdsonVillarroel"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? ¡No dudes en contactarme!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
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
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ¡Trabajemos Juntos!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
              Si tienes una idea o proyecto en mente, me encantaría escucharlo.
            </p>
            <a
              href="mailto:villarroel@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-200 transform hover:scale-105"
            >
              Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 