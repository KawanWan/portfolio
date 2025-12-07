import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio - Desenvolvedor Full Stack',
  description: 'Portfólio profissional de desenvolvedor Full Stack especializado em Laravel e Next.js',
  keywords: ['portfólio', 'desenvolvedor', 'full stack', 'Laravel', 'Next.js', 'React'],
  authors: [{ name: 'Seu Nome' }],
  openGraph: {
    title: 'Portfólio - Desenvolvedor Full Stack',
    description: 'Portfólio profissional de desenvolvedor Full Stack',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}