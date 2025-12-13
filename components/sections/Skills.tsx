import React from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
// Removemos a importação do Card pois faremos uma estrutura personalizada
// import Card from '../ui/Card'; 

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Habilidades" subtitle="Tecnologias" background="white">
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            
            <div className="bg-blue-600 dark:bg-gray-800/50 py-4 px-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-center text-gray-50 dark:text-white tracking-tight">
                {category.category}
              </h3>
            </div>

            <div className="p-6 flex-grow">
              <div className="flex flex-wrap justify-center gap-3">
                {category.items.map((skill, skillIndex) => {
                  const isImagePath = skill.icon.startsWith('/') || skill.icon.startsWith('http');

                  return (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    >
                      {isImagePath ? (
                        <div className="relative w-5 h-5">
                          <Image
                            src={skill.icon}
                            alt={`Ícone ${skill.name}`}
                            fill
                            className="object-contain"
                            sizes="20px"
                          />
                        </div>
                      ) : (
                        <span className="text-lg leading-none">{skill.icon}</span>
                      )}

                      <span className="text-gray-700 dark:text-gray-200 font-medium text-sm group-hover:text-blue-600">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}