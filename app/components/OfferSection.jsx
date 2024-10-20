// components/OfferSection.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrophy, faPen, faFlag } from '@fortawesome/free-solid-svg-icons';

const OfferSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto p-6 space-y-6 md:space-y-0 gap-4">
      {/* Our Offer Section */}
      <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">OUR OFFER</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 mr-2" />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 mr-2" />
            Dummy text of the printing and typesetting industry.
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 mr-2" />
            Simply dummy text of the printing and typesetting industry.
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 mr-2" />
            Lorem Ipsum dolor sit amet rem Ipsum.
          </li>
        </ul>
      </div>

      {/* Why It's Best Section */}
      <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">WHY IT'S BEST?</h2>
        <div className="space-y-4 text-gray-700">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTrophy} className="text-pink-500 w-6 h-6 mr-2" />
            <div>
              <h3 className="font-semibold">BEST QUALITY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing sed diam nibh euismod.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPen} className="text-pink-500 w-6 h-6 mr-2" />
            <div>
              <h3 className="font-semibold">INTEGRITY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing sed diam nibh euismod.</p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFlag} className="text-pink-500 w-6 h-6 mr-2" />
            <div>
              <h3 className="font-semibold">STRATEGY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing sed diam nibh euismod.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
