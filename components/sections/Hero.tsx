'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
  };
}

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero({ name, title, subtitle, social }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    if (social.whatsapp) {
      const number = social.whatsapp.replace(/\D/g, '');
      const message = encodeURIComponent("Olá! Vi seu portfólio e gostaria de falar sobre um projeto.");
      window.open(`https://wa.me/${number}?text=${message}`, '_blank');
    }
  };

  return (
    <section className="min-h-screen w-full max-w-[100vw] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-950 text-white relative overflow-hidden py-24 md:py-0">

      <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center p-4 md:p-6 md:px-12 animate-fade-in overflow-hidden">

        <div
          className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 pr-4 md:pr-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group flex-shrink-0"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Image
            src="/logo.png"
            alt="Logo Kawan Wan"
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
          />

          <span className="text-base md:text-lg font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors whitespace-nowrap">
            Kawan<span className="text-sky-400">.</span>
          </span>
        </div>

        <div className="flex gap-3 md:gap-6 items-center flex-shrink-0">
             {social.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 hover:text-sky-400" aria-label="GitHub">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
             )}
             {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110 hover:text-blue-400" aria-label="LinkedIn">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
             )}
             {social.twitter && (
                 <a href={social.twitter} className="text-gray-400 hover:text-white transition-all hover:scale-110" aria-label="Twitter">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                 </a>
            )}
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="text-sky-400 text-lg md:text-xl font-semibold animate-bounce">
              👋 Olá, eu sou
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up">
            <span className="text-white">
              {name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-4 animate-slide-up delay-100">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-slide-up delay-200">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center animate-slide-up delay-300">
            {social.whatsapp && (
              <Button
                variant="primary"
                size="lg"
                onClick={openWhatsApp}
                icon={<WhatsAppIcon />}
                className="!bg-green-600 hover:!bg-green-500 border-none shadow-lg shadow-green-900/20 ring-offset-2 focus:ring-green-500"
              >
                Vamos conversar
              </Button>
            )}

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('projects')}
              icon={<span>💼</span>}
            >
              Ver Projetos
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('contact')}
              icon={<EnvelopeIcon className="w-5 h-5" />}
            >
              Email
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors p-2"
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}