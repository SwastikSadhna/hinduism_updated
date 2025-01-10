import React, { useState } from 'react';
import { FaSun, FaMoon, FaBook } from 'react-icons/fa';
import Shlok from './Shlok';
import { imageDetails } from '../../resources';

const ShlokList = () => {
  const [activeCategory, setActiveCategory] = useState('morning');

  const categories = [
    { id: 'morning', title: 'Morning Shloks', icon: <FaSun /> },
    { id: 'bedtime', title: 'Bedtime Shloks', icon: <FaMoon /> },
    { id: 'study', title: 'Study Shloks', icon: <FaBook /> },
  ];

  const shloks = {
    morning: [
      {
        text: "कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती।\nकरमूले तु गोविन्दः प्रभाते करदर्शनम्॥",
        translation: "Lakshmi resides in the fingertips, Saraswati in the middle of the palms, and Govinda at the base of the palms. Therefore, one should look at one's palms in the morning.",
        image: `${imageDetails.MorningShlok1.src}`,
        audio: "/audio/morning-shlok-1.mp3"
      },
      {
        text: "समुद्रवसने देवि पर्वतस्तनमण्डले।\nविष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे॥",
        translation: "O Goddess (Earth) draped in oceans, with mountains as your bosom, O consort of Vishnu, I bow to you. Please forgive me for touching you with my feet.",
        image: `${imageDetails.MorningShlok2.src}`,
        audio: "/audio/morning-shlok-2.mp3"
      },
    ],
    bedtime: [
      {
        text: "करचरण कृतं वाक्कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम्।\nविहितमविहितं वा सर्वमेतत्क्षमस्व\nजय जय करुणाब्धे श्री महादेव शम्भो॥",
        translation: "O Ocean of Compassion, O Mahadeva Shambhu, please forgive all my misdeeds committed by hands, legs, speech, body, action, ears, eyes, or mind, whether these were done intentionally or unintentionally. Victory to you, O Merciful One!",
        image: `${imageDetails.NightShlok1.src}`,
        video: "/videos/bedtime-shlok-1.mp4"
      },
      {
        text: "त्वमेव माता च पिता त्वमेव\nत्वमेव बन्धुश्च सखा त्वमेव।\nत्वमेव विद्या द्रविणं त्वमेव\nत्वमेव सर्वं मम देवदेव॥",
        translation: "You are my mother and You are my father. You are my relative and You are my friend. You are my knowledge and You are my wealth. You are my all, O God of gods.",
        image: `${imageDetails.Ganesh.src}`,
        audio: "/audio/bedtime-shlok-2.mp3"
      },
    ],
    study: [
      {
        text: "सरस्वति नमस्तुभ्यं वरदे कामरूपिणि।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥",
        translation: "O Goddess Saraswati, salutations to you, the giver of boons and fulfiller of wishes. I begin my studies, may I always be successful.",
        image: `${imageDetails.StudyShlok1.src}`,
        audio: "/audio/study-shlok-1.mp3"
      },
      {
        text: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः।\nगुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः॥",
        translation: "The Guru is Brahma, the Guru is Vishnu, the Guru is the god Maheshwara. The Guru is verily the supreme Brahman. Salutations to that Guru.",
        image: `${imageDetails.StudyShlok2.src}`,
        audio: "/audio/study-shlok-2.mp3"
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center px-4 py-2 rounded-full ${
              activeCategory === category.id
                ? 'bg-orange-500 text-white'
                : 'bg-white text-orange-500 hover:bg-orange-100'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            <span className="ml-2">{category.title}</span>
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {shloks[activeCategory].map((shlok, index) => (
          <Shlok key={index} {...shlok} />
        ))}
      </div>
    </div>
  );
};

export default ShlokList;

