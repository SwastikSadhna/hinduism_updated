import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: "Vinay Koshti",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dhruv Shere",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Nirmal Prajapati",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Neesarg Soni",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dilip Suryal",
      role: "Innovation and Development",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
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
              <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
