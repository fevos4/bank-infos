import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const News = () => {
  return (
    <div className="w-full bg-white flex flex-col px-6 md:px-24 mb-6">
        <div>
            <h3 className='font-bold text-2xl'>News</h3>
        </div>
      <div className="news-container flex flex-row mt-6 space-x-5 overflow-x-auto shadow-sm md:px-11">
        <div className="news-card bg-white shadow-md rounded-md overflow-hidden flex-shrink-0 w-1/3">
          <img
            src="/assets/news.webp"
            alt="News"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">Fintech Innovation</h2>
            <p className="text-gray-600 mb-6 font-light text-sm">
              The Commercial Bank of Ethiopia, the country's largest bank, has
              launched a new digital banking platform that allows customers to
              access a wide range of financial services through their
              smartphones. This move is part of the bank's strategy to improve
              financial inclusion and keep pace with the rapidly evolving fintech
              landscape in Ethiopia.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium mt-6"
            >
              read more
            </a>
          </div>
        </div>
        <div className="news-card bg-white shadow-md rounded-md overflow-hidden flex-shrink-0 w-1/3">
          <img
            src="/assets/news.webp"
            alt="News"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">Fintech Innovation</h2>
            <p className="text-gray-600 mb-6 font-light text-sm">
              The Commercial Bank of Ethiopia, the country's largest bank, has
              launched a new digital banking platform that allows customers to
              access a wide range of financial services through their
              smartphones. This move is part of the bank's strategy to improve
              financial inclusion and keep pace with the rapidly evolving fintech
              landscape in Ethiopia.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium mt-6"
            >
              read more
            </a>
          </div>
        </div>
        <div className="news-card bg-white shadow-md rounded-md overflow-hidden flex-shrink-0 w-1/3">
          <img
            src="/assets/news.webp"
            alt="News"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">Fintech Innovation</h2>
            <p className="text-gray-600 mb-6 font-light text-sm">
              The Commercial Bank of Ethiopia, the country's largest bank, has
              launched a new digital banking platform that allows customers to
              access a wide range of financial services through their
              smartphones. This move is part of the bank's strategy to improve
              financial inclusion and keep pace with the rapidly evolving fintech
              landscape in Ethiopia.
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium mt-6"
            >
              read more
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <button className='flex mt-6 hover:text-blue-300 gap-4'>
          <p>See More</p><FaArrowRightLong className='mt-1.5'/>
        </button>
      </div>
    </div>
  );
};

export default News;
