import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import Popup from './Popup';

const Card = ({ text, Icon, tag }) => {
  return (
    <section className="flex items-center justify-center p-5">
      <div className="relative bg-gray-900 h-[220px] w-[330px] rounded-lg">
        <div className="absolute flex items-center gap-1 p-3 bg-gray-800 rounded top-5 left-5 cursor-pointer">
          {/* Use the Icon prop here */}
          {Icon && <Icon className="text-white" />} 
          <h2 className="font-bold text-white">{tag}</h2>
        </div>

        <div className="absolute flex items-center w-full bottom-20 left-3">
          <p className="font-medium text-white">
            {text}
          </p>
        </div>

        <div className='flex items-center justify-center relative top-[10rem]'>
          <Popup/>
        </div>
      </div>
    </section>
  );
}

// Define prop types for the component
Card.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired, // Enforce that Icon should be a React component
};

export default Card;
