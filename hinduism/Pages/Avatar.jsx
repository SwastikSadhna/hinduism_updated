import React, { useState } from 'react';

const VishnuAvatarsApp = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(null); // State for selected avatar
  const [showMore, setShowMore] = useState(false); // State for showing more content

  // Data for Vishnu's avatars
  const avatars = [
    {
      _id: 1,
      name: 'Matsya',
      image: 'matsya.jpg',
      yuga: 'Satya',
      books: ['Matsya Purana'],
      description: 'The fish avatar who saved the Vedas during the great flood.',
      festival: 'Matsya Jayanti',
      temples: ['Matsya Temple'],
      god_ref: 1,
      sloka: ['Matsya sloka'],
      festivals: ['Matsya Festival'],
      reference_links: [
        { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Matsya' },
        { name: 'Bhagavata Purana', url: 'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana' },
      ],
      video: 'matsya-story.mp4',
      storyline: 'Matsya is the first avatar of Vishnu, who appeared in the Satya Yuga to save the sacred Vedas and the sage Manu from a catastrophic flood. He guided Manu\'s boat to safety, ensuring the survival of life and knowledge.',
      recommendedVideos: ['matsya-video1.mp4', 'matsya-video2.mp4'],
      recommendedBooks: ['Matsya Purana', 'Hindu Mythology'],
    },
    {
      _id: 2,
      name: 'Kurma',
      image: 'kurma.jpg',
      yuga: 'Satya',
      books: ['Kurma Purana'],
      description: 'The tortoise avatar who supported the churning of the ocean.',
      festival: 'Kurma Jayanti',
      temples: ['Kurma Temple'],
      god_ref: 1,
      sloka: ['Kurma sloka'],
      festivals: ['Kurma Festival'],
      reference_links: [
        { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Kurma' },
        { name: 'Bhagavata Purana', url: 'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana' },
      ],
      video: 'kurma-story.mp4',
      storyline: 'Kurma, the tortoise avatar, appeared during the Samudra Manthan (churning of the ocean) to support Mount Mandara on his back. This event led to the emergence of divine treasures, including the nectar of immortality.',
      recommendedVideos: ['kurma-video1.mp4', 'kurma-video2.mp4'],
      recommendedBooks: ['Kurma Purana', 'Ocean Churning Stories'],
    },
    {
      _id: 3,
      name: 'Varaha',
      image: 'varaha.jpg',
      yuga: 'Satya',
      books: ['Varaha Purana'],
      description: 'The boar avatar who rescued the Earth from the demon Hiranyaksha.',
      festival: 'Varaha Jayanti',
      temples: ['Varaha Temple'],
      god_ref: 1,
      sloka: ['Varaha sloka'],
      festivals: ['Varaha Festival'],
      reference_links: [
        { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Varaha' },
        { name: 'Bhagavata Purana', url: 'https://www.wisdomlib.org/hinduism/book/the-bhagavata-purana' },
      ],
      video: 'varaha-story.mp4',
      storyline: 'Varaha, the boar avatar, rescued the Earth (personified as Goddess Bhudevi) from the demon Hiranyaksha, who had dragged her to the bottom of the cosmic ocean. Varaha lifted the Earth on his tusks and restored her to her rightful place.',
      recommendedVideos: ['varaha-video1.mp4', 'varaha-video2.mp4'],
      recommendedBooks: ['Varaha Purana', 'Earth Rescue Tales'],
    },
  ];

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="min-h-screen bg-orange-50 text-black">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-orange-800">The Avatars of Vishnu</h1>
        <p className="text-xl mb-8 text-orange-700">
          Explore the divine incarnations of Lord Vishnu and their timeless stories.
        </p>
      </div>

      {/* Description about Lord Vishnu */}
      <div className="container mx-auto px-4 py-8 bg-orange-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-orange-800">About Lord Vishnu</h2>
        <p className="text-lg text-orange-700">
          Lord Vishnu is one of the principal deities of Hinduism, known as the preserver and protector of the universe. He incarnates in various forms, or avatars, to restore cosmic order and protect dharma. Each avatar has a unique story and purpose, reflecting divine intervention in the world.
        </p>
      </div>

      {/* Avatar Selection Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-800">Choose an Avatar</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {avatars.map((avatar) => (
            <div
              key={avatar._id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:bg-orange-200 transition-all"
              onClick={() => setSelectedAvatar(avatar)}
            >
              <img
                src={`/images/${avatar.image}`}
                alt={avatar.name}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-orange-800">{avatar.name}</h3>
              <p className="text-sm text-center text-orange-600 mt-2">{avatar.description}</p>
            </div>
          ))}
        </div>
      </div>

       {/* Avatar Details Card */}
       {selectedAvatar && (
        <div className="container mx-auto px-4 py-12 bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Image and Details */}
            <div>
              <img
                src={`/images/${selectedAvatar.image}`}
                alt={selectedAvatar.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-3xl font-bold text-orange-800 mb-4">{selectedAvatar.name}</h2>
              <p><strong>Yuga:</strong> {selectedAvatar.yuga}</p>
              <p><strong>Books:</strong> {selectedAvatar.books?.join(', ')}</p>
              <p><strong>Description:</strong> {selectedAvatar.description}</p>
              <p><strong>Festival:</strong> {selectedAvatar.festival}</p>
              <p><strong>Temples:</strong> {selectedAvatar.temples?.join(', ')}</p>
              <p><strong>Sloka:</strong> {selectedAvatar.sloka?.join(', ')}</p>
              <p><strong>Related Festivals:</strong> {selectedAvatar.festivals?.join(', ')}</p>

             
            </div>

            {/* Right Side - Video Section */}
            <div>
              <video controls className="w-full rounded-lg my-6">
                <source src={`/videos/${selectedAvatar.video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Show More Button */}
          <button 
            onClick={handleShowMore} 
            className="bg-orange-500 text-white px-4 py-2 rounded-lg mx-auto block my-6"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {/* Recommended Videos and Books */}
          {showMore && (
            <>
              {/* Storyline */}
              <h3 className="text-xl font-bold text-orange800 mb-4">Storyline</h3>
              <p className="text-lg text-orange700 mb-6">{selectedAvatar.storyline}</p>

              <h3 className="text-xl font-bold text-orange800 mb-4">Recommended Videos</h3>
              <ul className="list-disc list-inside mb-6">
                {selectedAvatar.recommendedVideos.map((video, index) => (
                  <li key={index}>
                    <a href={`/videos/${video}`} target="_blank" rel="noopener noreferrer" 
                       className="text-blue600 hover:text-blue800 underline">
                      Watch Video {index + 1}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-orange800 mb-4">Recommended Books</h3>
              <ul className="list-disc list-inside mb-6">
                {selectedAvatar.recommendedBooks.map((book, index) => (
                  <li key={index} className="text-orange700">{book}</li>
                ))}
            </ul>
                          
            <h3 className="text-xl font-bold text-orange800 mb-4">External Links</h3>
               {/* External Links */}
              <div className="space-y-2 mt-4 mx-2">
                {selectedAvatar.reference_links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800 underline"
                  >
                    {link.name}, 
                  </a>
                ))}
              </div>
                
            </>
          )}
        </div>
       )}
    </div>
  );
};

export default VishnuAvatarsApp;
