import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Juan González | Full-Stack Developer & Security',
  description:
    'Portafolio de Juan Alfonzo González Guzmán, estudiante de Ingeniería en Informática (UCAB). Full-Stack Developer especializado en React, TypeScript, Express, Python y C++.',
  keywords: [
    'Juan González',
    'Full-Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Ciberseguridad',
    'Portafolio',
  ],
  authors: [{ name: 'Juan Alfonzo González Guzmán' }],
  openGraph: {
    title: 'Juan González | Full-Stack Developer & Security',
    description:
      'Portafolio de proyectos web, sistemas y certificaciones de Juan González.',
    type: 'website',
    locale: 'es_VE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className="bg-[#F5F4F0] text-[#3B507D] antialiased">{children}</body>
    </html>
  );
}