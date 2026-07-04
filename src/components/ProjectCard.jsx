import React from 'react'

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <div className="project-card group rounded-2xl overflow-hidden shadow-sm" data-aos="fade-up" data-aos-delay={delay}>
      <div className="relative h-64 overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="text-primary-orange text-xs font-semibold">{project.category}</span>
          <h3 className="text-white font-serif font-bold text-lg mt-1">{project.name}</h3>
          <p className="text-white/70 text-sm mt-1">{project.location}</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span><i className="fas fa-calendar mr-1 text-primary-orange"></i>{project.year}</span>
          <span>
            <i className={`fas mr-1 ${project.status === 'Completed' ? 'fa-check-circle text-primary-green' : 'fa-spinner text-primary-orange'}`}></i>
            {project.status}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
