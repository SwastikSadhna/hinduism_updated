import logo from './src/Resources/home/Logo.png';
import loading from './src/Resources/home/loading.gif'
import carousel1 from './src/Resources/home/carousel2.png'
import carousel2 from './src/Resources/home/carousel2.png'
import Dhwarika from './src/Resources/home/Dhwarika.jpg'
import Badrinath from './src/Resources/home/Badrinath.jpg'
import Jagganathpuri from './src/Resources/home/JagganathPuri.jpeg'
import Rameshwaram from './src/Resources/home/Rameshwaram.jpg'
import Sanatan from './src/Resources/home/sanatan.png'
import Brahma from './src/Resources/home/Brahma.png'
import Vishnu from './src/Resources/home/Vishnu.png'
import Shiv from './src/Resources/home/Mahadev.png'
import Temple from './src/Resources/home/indian-temple.jpg'
import Rammandir from './src/Resources/home/rammandir-2.jpg'
import HeroImage from './src/Resources/home/hero-image.jpg'
import HeroImage3 from './src/Resources/home/Akshardham-Temple.jpg'

const images = [Rammandir,logo,loading,carousel1,carousel2,Dhwarika,Rameshwaram,Jagganathpuri,Badrinath,Sanatan,Brahma,Vishnu,Shiv,Temple,HeroImage];
const imageDetails = {
    HeroImage3:{
        src: HeroImage3,
        alt: 'Hindu Mandir',
    },
    Rammandir:{
        src: Rammandir,
        alt: 'Rammandir',
    },
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
        src: Dhwarika,
        alt: 'Dhwarika', 
    },
    Rameshwaram: {
        src: Rameshwaram,
        alt: 'Rameshwaram', 
    },
    Jagganathpuri: {
        src: Jagganathpuri,
        alt: 'Jagganath Puri', 
    },
    Badrinath: {
        src: Badrinath,
        alt: 'Badrinath', 
    },
    Sanatan: {
        src: Sanatan,
        alt: 'Sanatan', 
    },
    Brahma: {
        src: Brahma,
        alt: 'Brahma dev', 
    },
    Vishnu: {
        src: Vishnu,
        alt: 'Shree Hari Vishnu', 
    },
    Shiv: {
        src: Shiv,
        alt: 'Mahadev', 
    },
    Temple: {
        src: Temple,
        alt: 'Temple Image',
    },
    HeroImage: {
        src: HeroImage,
        alt: 'Hero Temple Image'
    }
};
export { images, imageDetails };
