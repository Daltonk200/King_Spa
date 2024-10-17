import { Carousel } from 'flowbite-react';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="max-w-6xl mx-auto my-16">
      <h2 className="text-4xl text-center font-bold mb-8 text-pink-500">What People Say</h2>
      {testimonials.length > 0 ? (
        <Carousel className="h-[300px]" >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg min-h-[300px]">
              {/* Circular Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-400">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
              </div>

              {/* Testimonial Text */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-lg italic">"{testimonial.text}"</p>
                <h3 className="mt-4 font-semibold text-xl text-gray-900">{testimonial.author}</h3>
                <p className="text-pink-400 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No testimonials available</p>
      )}
    </div>
  );
};

export default Testimonials;
