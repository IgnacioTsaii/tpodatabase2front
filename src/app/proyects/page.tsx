'use client';
import React, { useState,useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

// Definiendo una interfaz para los proyectos
interface Project {
  id: number;
  name: string;
  activities: string;
  comments: string;
  progress: string;
  employee: string;
  company: string;
  deadline: string;
  specialty: string;
  imageUrl: string; // URL de la imagen para cada proyecto
}

// Datos de ejemplo con imágenes ficticias
const projects: Project[] = [
  {
    id: 1,
    name: 'Desarrollo Web',
    activities: 'Diseño de interfaz, integración de backend',
    comments: 'Revisar los colores de la interfaz',
    progress: 'En curso',
    employee: 'Juan Pérez',
    company: 'Tech Solutions',
    deadline: '2024-07-30',
    specialty: 'Desarrollo Web',
    imageUrl: '/images/migrating.jpg'
  },
  {
    id: 2,
    name: 'Optimización de Base de Datos',
    activities: 'Mejora del rendimiento, reducción de tiempos de consulta',
    comments: 'Priorizar consultas más lentas',
    progress: 'Iniciado',
    employee: 'Ana Gómez',
    company: 'Data Tech',
    deadline: '2024-08-15',
    specialty: 'Base de Datos',
    imageUrl: '/images/optimizacion.png'
  },
  {
    id: 3,
    name: 'Aplicación Móvil de Salud',
    activities: 'Desarrollo de funcionalidades, pruebas de usuario',
    comments: 'Incluir recordatorios de medicación',
    progress: 'Finalizado',
    employee: 'Luis Navarro',
    company: 'Health Innovations',
    deadline: '2024-05-20',
    specialty: 'Desarrollo Móvil',
    imageUrl: '/images/comunication.jpg'
  },
  {
    id: 4,
    name: 'Rebranding Corporativo',
    activities: 'Diseño de nuevo logo, actualización de materiales de marketing',
    comments: 'Asegurar coherencia de marca en todas las plataformas',
    progress: 'En curso',
    employee: 'Sofía Martín',
    company: 'Creative Design Ltd.',
    deadline: '2024-09-01',
    specialty: 'Diseño Gráfico',
    imageUrl: '/images/ux.jpg'
  },
  {
    id: 5,
    name: 'Integración de Sistema ERP',
    activities: 'Configuración de módulos, capacitación de usuarios',
    comments: 'Verificar la compatibilidad con software existente',
    progress: 'Iniciado',
    employee: 'Carlos Ruiz',
    company: 'Efficiency Tech',
    deadline: '2024-12-10',
    specialty: 'Sistemas ERP',
    imageUrl: '/images/resources.jpg'
  },
  {
    id: 6,
    name: 'Campaña de Marketing Digital',
    activities: 'Creación de contenido, gestión de redes sociales',
    comments: 'Enfocarse en incrementar el engagement',
    progress: 'En curso',
    employee: 'Elena Torres',
    company: 'Digital Solutions',
    deadline: '2024-06-30',
    specialty: 'Marketing Digital',
    imageUrl: '/images/pngwing.com.png'
  },
  {
    id: 7,
    name: 'Desarrollo de Videojuego',
    activities: 'Programación de gameplay, diseño de personajes',
    comments: 'Balancear niveles de dificultad',
    progress: 'Iniciado',
    employee: 'Marco Fernández',
    company: 'Games Dev Studio',
    deadline: '2025-01-15',
    specialty: 'Desarrollo de Juegos',
    imageUrl: '/images/mockup.png'
  },
  {
    id: 8,
    name: 'Automatización de Procesos',
    activities: 'Instalación de robots, programación PLC',
    comments: 'Realizar pruebas de seguridad',
    progress: 'Finalizado',
    employee: 'Claudia Jiménez',
    company: 'Automation Advanced',
    deadline: '2024-10-05',
    specialty: 'Automatización',
    imageUrl: '/images/asd.png'
  },
  {
    id: 9,
    name: 'Desarrollo de E-commerce',
    activities: 'Configuración de carrito de compras, optimización SEO',
    comments: 'Asegurar transacciones seguras',
    progress: 'En curso',
    employee: 'David Sánchez',
    company: 'Online Retail Inc.',
    deadline: '2024-11-20',
    specialty: 'Comercio Electrónico',
    imageUrl: '/images/comunication.jpg'
  },
];

const ProjectCard: React.FC<{ project: Project, onSelected: () => void, isSingleView?: boolean }> = ({ project, onSelected, isSingleView = false }) => {
    const [showDetails, setShowDetails] = useState(false);
  
    const handleShowDetails = () => {
      setShowDetails(!showDetails);
      onSelected(); // Siempre llama a onSelected, independientemente del estado de showDetails
    };
  
    return (
      <div className={`bg-white shadow-lg rounded-lg p-4 mb-4 ${isSingleView ? 'col-span-3' : ''}`}>
        {!isSingleView && (
          <img src={project.imageUrl} alt={`Imagen de ${project.name}`} className="w-full h-48 object-cover rounded-t-lg" />
        )}
        <div className="flex justify-around items-center">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <button className="bg-green-400 text-white rounded mt-2 p-2" onClick={handleShowDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        {showDetails && (
          <div className={`text-gray-600 p-2 ${isSingleView ? 'text-lg' : ''}`}>
            {/* Estilos mejorados para la vista única */}
            <p><strong>Actividades:</strong> {project.activities}</p>
            <p><strong>Comentarios:</strong> {project.comments}</p>
            <p><strong>Progreso:</strong> {project.progress}</p>
            <p><strong>Empleado:</strong> {project.employee}</p>
            <p><strong>Empresa:</strong> {project.company}</p>
            <p><strong>Deadline:</strong> {project.deadline}</p>
            <p><strong>Especialidad requerida:</strong> {project.specialty}</p>
          </div>
        )}
      </div>
    );
  };

  const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
  
    const handleSelectProject = (project: Project) => {
      setSelectedProject(selectedProject === project ? null : project);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); // Oculta el spinner después de 3 segundos
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
  
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold  text-center underline-animation text-green-700 mb-12">Proyects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedProject ? (
              <ProjectCard 
                key={selectedProject.id}
                project={selectedProject}
                onSelected={() => setSelectedProject(null)}
                isSingleView={true}
              />
            ) : (
              projects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onSelected={() => handleSelectProject(project)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectsPage;