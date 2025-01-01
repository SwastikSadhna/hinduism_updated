import Button from './Button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { imageDetails } from '../../resources';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="bg-gray-50 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Join Us for this amazing journey of exploring the Hindu culture and spirituality. We are here to help you with any queries you have.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p className="text-gray-600">Hindavi Swarajya Sansthan</p>
                <p className="text-gray-600">Karnavati, Gujarat, Bharat</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">sanatan@gmail.com</p>
                <p className="text-gray-600">hindaviswaraj@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">Phone: + 9316846548</p>
              </div>
            </div>
            <div className="pt-6">
              <p className="font-semibold mb-4">Follow our social media</p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
