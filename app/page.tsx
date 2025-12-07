import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  const { personal, skills, projects } = portfolioData;

  return (
    <main className="min-h-screen">
      <Hero
        name={personal.name}
        title={personal.title}
        subtitle={personal.subtitle}
        social={personal.social}
      />
      <About
        bio={personal.bio}
        location={personal.location}
        availability={personal.availability}
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact
        email={personal.email}
        phone={personal.phone}
        location={personal.location}
        social={personal.social}
      />
      <Footer name={personal.name} social={personal.social} />
    </main>
  );
}
