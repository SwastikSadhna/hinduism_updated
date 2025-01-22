import React from 'react';
import { imageDetails } from '../../resources';

const ImageGallery = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Image/Video Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Video Embed */}
        <div className="p-4 rounded-lg">
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/s2NQhpFGIOg"
              title="Yoga Pose"
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/tDsXvHgWQ5s?si=XgbwToy2fbOJYPcp"
              title="Yoga Pose"
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="p-4 rounded-lg">
          <div className="relative pb-[56.25%]">
            <iframe
              src="https://www.youtube.com/embed/60Gnd8Wy0gE?si=G6h-3N7fsL850HU3"
              title="Yoga Pose"
              className="absolute inset-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ImageGallery;
