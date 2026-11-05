import type { Project } from '@/types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'kaiten-loco',
    title: 'Kaiten Loco – Sistema Full-Stack de Pedidos',
    shortDescription:
      'Aplicación Full-Stack cliente-servidor para gestión de comandas y pedidos en tiempo real.',
    fullDescription:
      'Sistema completo desarrollado con React en el frontend y Express/Node.js en el backend con TypeScript. Diseñado para gestionar pedidos en restaurantes en tiempo real con control de estado de mesa y procesamiento optimizado de órdenes.',
    category: 'web',
    architecture: [
      'Frontend: React + Tailwind CSS + TypeScript',
      'Backend: Node.js + Express REST API',
      'Casos de estudio de UX & interfaz interactiva',
      'Gestión de estado global y optimización de render',
    ],
    tags: ['React', 'Express', 'TypeScript', 'Node.js', 'Tailwind'],
    isDeployed: true,
    demoUrl: 'https://tep-tarea-1-kaiten-loco.pages.dev',
    githubUrl: 'https://github.com/juan-gonzalezg/tep-tarea-1-kaiten-loco',
    browserTitle: 'tep-tarea-1-kaiten-loco.pages.dev',
    type: 'Full-Stack Web App',
  },
  {
    id: 'skydash-manager',
    title: 'SkyDash Manager – Dashboard Meteorológico',
    shortDescription:
      'Plataforma de procesamiento y visualización de datos georreferenciados en tiempo real.',
    fullDescription:
      'Plataforma web interactiva desarrollada para análisis climático. Consume APIs meteorológicas en tiempo real y renderiza mapas georreferenciados para análisis meteorológico exacto.',
    category: 'web',
    architecture: [
      'Frontend: JavaScript Vanilla (ES6+), HTML5, CSS3',
      'Integración con APIs externas en vivo',
      'Despliegue en GitHub Pages',
      'Estructura modular orientada a objetos en cliente',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages', 'APIs'],
    isDeployed: true,
    demoUrl: 'https://juan-gonzalezg.github.io/SkyDash-Manager_parcial-final/',
    githubUrl: 'https://github.com/juan-gonzalezg/SkyDash-Manager_parcial-final',
    browserTitle: 'juan-gonzalezg.github.io/SkyDash-Manager_parcial-final',
    type: 'Web Platform & Geolocation',
  },
  {
    id: 'banca-360',
    title: 'Banca 360 – Dashboard Financiero',
    shortDescription:
      'Maquetación e interfaz frontend modular para plataformas bancarias y paneles de control.',
    fullDescription:
      'Proyecto de interfaz bancaria integral. Incluye resumen de cuentas, simulador de transferencias en tiempo real y componentes de control de movimientos financieros.',
    category: 'web',
    architecture: [
      'Frontend: HTML5 Semántico, CSS3 Flexbox/Grid, JavaScript',
      'Diseño Responsive Mobile-First',
      'Simulación de transacciones asíncronas',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Dashboard', 'UI/UX'],
    isDeployed: true,
    demoUrl: 'https://juan-gonzalezg.github.io/Proyecto-1/',
    githubUrl: 'https://github.com/juan-gonzalezg/Proyecto-1',
    browserTitle: 'juan-gonzalezg.github.io/Proyecto-1',
    type: 'Financial Dashboard Frontend',
  },
  {
    id: 'cpp-algorithms',
    title: 'Estructuras de Datos & Algoritmos en C++',
    shortDescription:
      'Colección de implementaciones de bajo nivel para gestión eficiente de memoria y grafos.',
    fullDescription:
      'Módulo enfocado en la resolución de problemas de alta complejidad computacional. Incluye estructuras de datos avanzadas (árboles AVL, grafos dirigidos, listas enlazadas) con manejo explícito de memoria.',
    category: 'systems',
    architecture: [
      'Lenguaje: C++17 Standard',
      'Manejo explícito de punteros y memoria dinámica',
      'Algoritmos de ordenamiento, búsqueda y árboles',
    ],
    tags: ['C++', 'Algoritmos', 'Estructuras de Datos', 'Memory Management'],
    isDeployed: false,
    demoUrl: null,
    githubUrl: 'https://github.com/juan-gonzalezg',
    browserTitle: 'terminal://cpp-algorithms',
    type: 'Systems & Algorithms',
  },
  {
    id: 'java-poo',
    title: 'Sistema de Gestión Orientado a Objetos (Java)',
    shortDescription:
      'Aplicación de escritorio con patrones de diseño (MVC) y arquitectura orientada a objetos.',
    fullDescription:
      'Desarrollo en Java aplicando los principios SOLID y patrones de diseño como Model-View-Controller, Factory y Singleton, garantizando modularidad y mantenibilidad.',
    category: 'systems',
    architecture: [
      'Lenguaje: Java JDK 17',
      'Patrones de Diseño: MVC, DAO, Singleton',
      'Capa de persistencia y manejo riguroso de excepciones',
    ],
    tags: ['Java', 'POO', 'Patrones de Diseño', 'MVC'],
    isDeployed: false,
    demoUrl: null,
    githubUrl: 'https://github.com/juan-gonzalezg',
    browserTitle: 'terminal://java-poo-app',
    type: 'Desktop & OOP Software',
  },
];