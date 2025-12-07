import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

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
    <Section id="skills" title="Habilidades" subtitle="Tecnologias" background="gray">
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <Card key={index} hover>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-3xl">
                {category.category === 'Backend' ? '⚙️' : 
                 category.category === 'Frontend' ? '🎨' : '🛠️'}
              </span>
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2">
                      <span>{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
