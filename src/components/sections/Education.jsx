import React from "react";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const Education = () => {

  const educationData = [
    {
      "id": 1,
      "degree": "Programación Informática, Aplicaciones Específicas",
      "institution": "Universidad Tecnológica Privada De Santa Cruz",
      "period": "Enero 2015 - Enero 2020",
      "location": "Santa Cruz de la Sierra, Bolivia",
      "description": "Formación académica en programación informática con enfoque en aplicaciones específicas, proporcionando una base sólida en desarrollo de software y tecnologías informáticas."
    }
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educación
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {educationData.map((education) => (
            <div key={education.id} className="bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-xl p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <FaGraduationCap className="text-3xl text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-medium text-orange-600 dark:text-orange-400 mb-2">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {education.period}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {education.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Education;
