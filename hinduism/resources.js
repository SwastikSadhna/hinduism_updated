import logo from './public/Resources/Logo.png';
import loading from './public/Resources/loading.gif'
import carousel1 from './public/Resources/carousel2.png'
import carousel2 from './public/Resources/carousel2.png'
import dhwarika from './public/Resources/Dhwarika.jpg'
import badrinath from './public/Resources/Badrinath.jpg'
import jagganathpuri from './public/Resources/JagganathPuri.jpeg'
import rameshwaram from './public/Resources/Rameshwaram.jpg'
import sanatan from './public/Resources/sanatan.png'
import brahmaji from './public/Resources/Brahma.png'
import vishnuji from './public/Resources/Vishnu.png'
import shivji from './public/Resources/Mahadev.png'

const images = [logo,loading,carousel1,carousel2,Dhwarika,Rameshwaram,Jagganathpuri,Badrinath,Sanatan,Brahma,Vishnu,Shiv];
const imageDetails = {
    logo: {
        src: logo,
        alt: 'Company Logo',
    },
    loading: {
        src: loading,
        alt: 'loading',
    },
    carousel1: {
        src: carousel1,
        alt: 'carousel-1',
    },
    carousel2: {
        src: carousel2,
        alt: 'carousel-2',
    },
    Dhwarika: {
        src: dhwarika,
        alt: 'Dhwarika', 
    },
    Rameshwaram: {
        src: rameshwaram,
        alt: 'Rameshwaram', 
    },
    Jagganathpuri: {
        src: jagganathpuri,
        alt: 'Jagganath Puri', 
    },
    Badrinath: {
        src: badrinath,
        alt: 'Badrinath', 
    },
    Sanatan: {
        src: sanatan,
        alt: 'Sanatan', 
    },
    Brahma: {
        src: brahmaji,
        alt: 'Brahma dev', 
    },
    Vishnu: {
        src: vishnuji,
        alt: 'Shree Hari Vishnu', 
    },
    Shiv: {
        src: shivji,
        alt: 'Mahadev', 
    },
};
export { images, imageDetails };
