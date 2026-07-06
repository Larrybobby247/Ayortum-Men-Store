import PageHeader from '../components/PageHeader'
import useScrollToTop from '../hooks/useScrollToTop'
import { teamMembers } from '../data/team'



export default function Team() {
  useScrollToTop()

  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the dedicated professionals behind Accurratte Hommes International."
        icon="fa-users"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-serif text-3xl font-bold text-dark-grey mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced professionals committed to excellence in every project.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={member.id} className="team-card bg-white rounded-2xl overflow-hidden shadow-sm group" data-aos="fade-up" data-aos-delay={(i % 3 + 1) * 100}>
                <div className="relative h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="team-overlay absolute inset-0 bg-primary-orange/90 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform"><i className="fab fa-linkedin-in"></i></a>
                    <a href={member.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-orange hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-bold text-dark-grey text-lg">{member.name}</h3>
                  <p className="text-primary-orange font-medium mt-1">{member.role}</p>
                  {member.certification && <p className="text-gray-500 text-xs mt-1">{member.certification}</p>}
                  <p className="text-gray-500 text-sm mt-2">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
