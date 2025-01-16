import { FaHeart, FaShare } from 'react-icons/fa';
import { imageDetails } from '../../../resources';

export default function DeviDevtasContent() {
  const devtas = [
    {
      category: "8 वसु",
      description: "वसु प्रकृति के आठ प्रमुख देवता हैं जो प्राकृतिक शक्तियों से संबंधित हैं। इन्हें शरीर के विभिन्न हिस्सों में निवास करने वाले माना जाता है।",
      image: `${imageDetails.Vasu.src}`,
      details: [
        { name: "अपस", meaning: "जल" },
        { name: "ध्रव", meaning: "ध्रुव तारा" },
        { name: "सोम", meaning: "चन्द्रमा" },
        { name: "धरा", meaning: "पृथ्वी" },
        { name: "अनिल", meaning: "वायु" },
        { name: "अनल", meaning: "अग्नि" },
        { name: "प्रत्यूष", meaning: "अंतरिक्ष" },
      ],
    },
    {
      category: "12 आदित्य",
      description: "आदित्य 12 सूर्य देवता हैं जो जीवन और प्रकृति के विभिन्न पहलुओं का प्रतिनिधित्व करते हैं।",
      image: `${imageDetails.Aditya.src}`,
      details: [
        { name: "अंशुमान", meaning: "प्राण वायु" },
        { name: "आर्यमन", meaning: "प्रातः और रात्रि" },
        { name: "इंद्र", meaning: "देवों के राजा" },
        { name: "त्वष्टा", meaning: "वनस्पति और औषधियाँ" },
        { name: "धाता", meaning: "सृष्टिकर्ता" },
        { name: "पर्जन्य", meaning: "वर्षा के देवता" },
        { name: "पूषा", meaning: "अन्न" },
        { name: "भग", meaning: "ऊर्जा और शक्ति" },
        { name: "मित्र", meaning: "सृष्टि के कर्म" },
        { name: "वरुण", meaning: "जल और भाग्य" },
        { name: "विवस्वान", meaning: "तेज और ऊर्जा" },
        { name: "विष्णु", meaning: "ब्रह्माण्डीय कानून" },
      ],
    },
    {
      category: "11 रूद्र",
      description: "रूद्र भगवान शिव के 11 रूप हैं, जो शरीर के विभिन्न अंगों और कार्यों का प्रतिनिधित्व करते हैं। ये रूप शरीर के भीतर विभिन्न क्रियाओं को संचालित करते हैं।",
      image: `${imageDetails.Rudra.src}`,
      details: [
        { name: "प्राण", meaning: "प्राण वायु" },
        { name: "अपान", meaning: "मल-मूत्र का त्याग" },
        { name: "व्यान", meaning: "रक्त संचार" },
        { name: "उदान", meaning: "स्वांस क्रिया" },
        { name: "समान", meaning: "पाचन और रस का उत्पादन" },
        { name: "नाग", meaning: "वायु संचरण" },
        { name: "कूर्म", meaning: "पलक झपकना" },
        { name: "कृकल", meaning: "भूख और प्यास" },
        { name: "देवदत्त", meaning: "छींकों और अंगड़ाई" },
        { name: "धनञ्जय", meaning: "शरीर का पोषण और नष्ट करना" },
        { name: "जीवात्मा", meaning: "जीवात्मा के निकलने पर शरीर का कार्य बंद" },
      ],
    },
    {
      category: "2 अश्विनी कुमार",
      description: "अश्विनी कुमार आयुर्वेद के आचार्य माने जाते हैं और वे देवताओं के चिकित्सक हैं। ये सूर्य देव के पुत्र हैं।",
      image: `${imageDetails.AshwiniKumar.src}`,
      details: [
        { name: "नासत्य", meaning: "हीलर" },
        { name: "दस्त्र", meaning: "औषधियाँ" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Introduction Section */}
      <div className="p-6 bg-blue-100 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          हिंदू धर्म में 33 कोटि देवी देवता
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          हमारे धर्मग्रंथों में '33 कोटि' देवताओं का वर्णन है, जहाँ 'कोटि' शब्द को लेकर काफी भ्रामक प्रचार है। 
          अधिकतर हम लोग 'कोटि' को 'करोड़' से ही परिभाषित करते हैं। 
          'कोटि' शब्द के प्रायः दो अर्थ हैं: एक "प्रकार" और दूसरा "करोड़"। इसीलिए हम '33 कोटि' देवताओं को '33 करोड़' देवता कहते हैं।
          इन '33 कोटि' देवताओं को मुख्यत: 4 श्रेणियों में विभाजित किया गया है।
        </p>
        <img
          src={imageDetails.Devtas.src}  // Replace with the image path for explanation
          alt="33 Koti Devi Devtas Explanation"
          className="mt-4 w-full max-w-xl mx-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Devi Devas Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {devtas.map((deva, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="mb-3">
              <h3 className="font-semibold text-xl flex items-center">
                {deva.category}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{deva.description}</p>
            </div>
            <div className="text-gray-800">
              <p className="font-semibold">विवरण:</p>
              <ul className="list-disc pl-5 text-gray-600">
                {deva.details.map((item, idx) => (
                  <li key={idx}>
                    <strong>{item.name}</strong>: {item.meaning}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src={deva.image}
                alt={deva.category}
                className="w-auto h-50 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
