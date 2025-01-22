import React from 'react';
import { imageDetails } from '../resources';
import TempleStory from '../Components/Temple/TempleStory';
import TempleUniqueness from '../Components/Temple/TempleUniqueness';
import TempleStructure from '../Components/Temple/TempleStructure';
import TempleSpecial from '../Components/Temple/TempleSpecial';
import TempleImage from '../Components/Temple/TempleFeatureImage';

const Temple = () => {
    const templeDetails = {
        image: `${imageDetails.Jagganathpuri.src}`, // Replace with actual image path
        story: 'The Jagannath Temple, located in Puri, Odisha, India, is one of the most revered pilgrimage sites in India and a key component of the Char Dham Yatra. The temple is dedicated to Lord Jagannath, a form of Lord Vishnu, and has a rich history dating back to the 12th century. It has been a focal point for religious and cultural activities for centuries, with millions of devotees visiting it annually for darshan and during festivals such as the Rath Yatra.',
        uniqueness: 'The Jagannath Temple is known for its distinctive rituals and traditions, which set it apart from other temples in India. One of its unique aspects is the absence of any idol representation of Lord Jagannath; instead, the deity is represented by wooden figures. The temple is also famous for the grand Rath Yatra, during which the deities are carried in massive chariots, a spectacle that attracts millions of pilgrims from all over the world.',
        structure: 'The Jagannath Temple’s architecture is a stunning example of Kalinga style, with its tall, curving spire rising above the city of Puri. The temple complex consists of several enclosures, and the main sanctum, called the Bada Deula, houses the deities. The temple’s intricately carved stone walls, the sacred water tank, and the massive chariots used for the Rath Yatra add to its architectural magnificence, making it an important cultural landmark.',
        special: 'The Jagannath Temple holds immense spiritual and cultural significance. It is one of the Char Dham pilgrimage sites, offering spiritual solace to devotees. The Rath Yatra, a key event of the temple, is one of the largest religious festivals in the world. What makes the temple even more special is its inclusivity; it welcomes devotees from all religions and castes, with a strong focus on communal harmony and devotion.',
        uniquenessImage: `${imageDetails.Jagganath.src}`, // Replace with actual image
        structureImage: `${imageDetails.TempleStructure.src}`, // Replace with actual image
        specialImage: `${imageDetails.Rathyatra.src}` // Replace with actual image
      };
      

  
    return (
      <div className="container min-h-screen">
        <TempleImage src={templeDetails.image} alt="Jagannath Temple" />
        <TempleStory story={templeDetails.story} />
        <TempleUniqueness uniqueness={templeDetails.uniqueness} image={templeDetails.uniquenessImage} />
        <TempleStructure structure={templeDetails.structure} image={templeDetails.structureImage} />
        <TempleSpecial special={templeDetails.special} image={templeDetails.specialImage} />
      </div>
    );
  };
  
  export default Temple;