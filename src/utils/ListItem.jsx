import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = ({ icon, title, description, isLastItem = false }) => {
  return (
    <div className={`flex w-full ${isLastItem ? '' : 'border-b-2 border-black-100 border-opacity-100'} py-4 dark:border-opacity-50 items-center`}>
      <div className="w-12 h-12 flex items-center justify-center mr-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-green-700" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ListItem;