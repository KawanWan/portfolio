import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface AboutProps {
  bio: string;
  location: string;
  availability: string;
}

export default function About({ bio, location, availability }: AboutProps) {
  return (
    <Section id="about" title="Sobre Mim" subtitle="Conheça mais" background="white">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Bio */}
        <div className="md:col-span-2">
          <Card>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Olá! 👋
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {bio}
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-2xl">📍</span>
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="text-2xl">✅</span>
                  <span className="font-semibold">{availability}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card hover>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                2+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Anos de Experiência
              </div>
            </div>
          </Card>
          
          <Card hover>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                20+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projetos Concluídos
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* What I Do */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <Card hover>
          <div className="text-center space-y-4">
            <div className="text-5xl">🎨</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Design Moderno
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Interfaces elegantes e responsivas que proporcionam uma experiência excepcional ao usuário.
            </p>
          </div>
        </Card>

        <Card hover>
          <div className="text-center space-y-4">
            <div className="text-5xl">⚡</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Performance
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Aplicações otimizadas e rápidas, garantindo a melhor performance possível.
            </p>
          </div>
        </Card>

        <Card hover>
          <div className="text-center space-y-4">
            <div className="text-5xl">🔒</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Segurança
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Código seguro seguindo as melhores práticas e padrões da indústria.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
