import BhaktiCard from '../Components/Bhakti/BhaktiCard';
import { FaChevronDown } from 'react-icons/fa';
import Footer from '../Components/Footer';

const bhaktiTypes = [
    {
      type: 'Duha',
      description: 'Traditional couplets imparting moral and spiritual wisdom.',
      count: 85,
      path: '/Bhakti/Duha'
    },
    {
      type: 'Chhand',
      description: 'Rhythmic poetic verses used in devotional and classical literature.',
      count: 65,
      path: '/Bhakti/Chhand'
    },
    {
      type: 'Bhajans',
      description: 'Soulful devotional songs praising deities and expressing devotion.',
      count: 220,
      path: '/Bhakti/Bhajans'
    },
    {
      type: 'Vedas',
      description: 'Ancient scriptures encompassing spiritual knowledge and cosmic truths.',
      count: 4,
      path: '/Bhakti/Vedas'
    },
    {
      type: '18 Purans',
      description: 'Mythological texts narrating the history of the universe and divine legends.',
      count: 18,
      path: '/Bhakti/Puran'
    },
    {
      type: '33 Koti Devta',
      description: 'A divine collection exploring the 33 types of Hindu deities symbolizing cosmic forces.',
      count: 33,
      path: '/Bhakti/Devtas'
    },
    {
      type: '108 Upnisads',
      description: 'Philosophical texts revealing the ultimate truth of existence and self-realization.',
      count: 108,
      path: '/Bhakti/Upnisads'
    },
    {
      type: 'Smritis',
      description: 'Sacred texts outlining ethical and moral laws for righteous living.',
      count: 12,
      path: '/Bhakti/Smritis'
    },
];
  
export default function Bhakti() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-orange-100 to-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bhakti Sadhana</h1>
          <p className="text-lg text-gray-600">Explore different forms of devotional content</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bhaktiTypes.map((item) => (
            <BhaktiCard
              key={item.type}
              type={item.type}
              description={item.description}
              count={item.count}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

