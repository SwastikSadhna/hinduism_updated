import { Github, Linkedin, Instagram } from 'lucide-react';
import { imageDetails } from '../../resources';

export default function Team() {
  const teamMembers = [
    {
      name: "Vinay Koshti",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
      github: "https://github.com/Vinayrk2",
      instagram: "https://instagram.com/vinaykoshti",
      linkedin: "https://linkedin.com/in/vinaykoshti",
    },
    {
      name: "Dhruv Shere",
      role: "Innovation and Development",
      image: `${imageDetails.Dhruv.src}`,
      github: "https://github.com/DHRUV-SHERE",
      instagram: "https://instagram.com/dhruvshere",
      linkedin: "https://linkedin.com/in/dhruvshere",
    },
    {
      name: "Nirmal Prajapati",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
      github: "https://github.com/NIRMAL-PRAJAPATI",
      instagram: "https://instagram.com/nirmalprajapati",
      linkedin: "https://linkedin.com/in/nirmalprajapati",
    },
    {
      name: "Neesarg Soni",
      role: "Innovation and Development",
      image: `${imageDetails.Neesarg.src}`,
      github: "https://github.com/Neesargsoni",
      instagram: "https://instagram.com/neesargsoni",
      linkedin: "https://linkedin.com/in/neesargsoni",
    },
    {
      name: "Dilip Suryal",
      role: "Innovation and Development",
      image: `${imageDetails.Dilip.src}`,
      github: "https://github.com/DILIP-SURYAL",
      instagram: "https://instagram.com/dilipsuryal",
      linkedin: "https://linkedin.com/in/dilipsuryal",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Meet Our Legal Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-600"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-700">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.role}</p>
            <div className="flex justify-center gap-4">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500 cursor-pointer" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
