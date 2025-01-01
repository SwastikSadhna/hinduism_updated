import Button from './Button';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="bg-gray-50 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Sociis vivamus viverra placerat sem efficitur molestie vehicula cubilia leo etiam nam.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p className="text-gray-600">Jalan Cempaka Wangi No 22</p>
                <p className="text-gray-600">Jakarta - Indonesia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600">support@yourdomain.tld</p>
                <p className="text-gray-600">hello@yourdomain.tld</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600">Phone: +6221.2002.2012</p>
                <p className="text-gray-600">Fax: +6221.2002.2013</p>
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
