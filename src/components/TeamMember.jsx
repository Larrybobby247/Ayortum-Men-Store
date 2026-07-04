import React from 'react'

const TeamMember = ({ member, delay = 0 }) => {
  return (
    <div className="team-card bg-white rounded-2xl overflow-hidden shadow-sm group" data-aos="fade-up" data-aos-delay={delay}>
      <div className="relative h-80 overflow-hidden">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        <div className="team-overlay absolute inset-0 bg-primary-orange/90 flex items-center justify-center gap-3">
          {member.linkedin && (
            <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.twitter && (
            <a href={member.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform">
              <i className="fab fa-twitter"></i>
            </a>
          )}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="font-serif font-bold text-dark-grey text-lg">{member.name}</h3>
        <p className="text-primary-orange font-medium mt-1">{member.role}</p>
        {member.certification && <p className="text-gray-500 text-xs mt-1">({member.certification})</p>}
        <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
      </div>
    </div>
  )
}

export default TeamMember
