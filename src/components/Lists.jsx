import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef(null);

  const cards = [
    {
      image: '/assets/CBE.png',
      name: 'Commercial Bank of Ethiopia',
      details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving,',
      interest: "15.5% Loan Interest",
      website: 'Visit Website',
    },
    {
      image: '/assets/download.png',
      name: 'Absyinia Bank',
      details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
      interest: "15.5% Loan Interest",
      website: 'Visit Website',
    },
    {
      image: '/assets/COOP.png',
      name: 'COOP Bank of Oromia',
      details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
      interest: "15.5% Loan Interest",
      website: 'Visit Website',
    },
    {
      image: '/assets/Nib.jpeg',
      name: 'Nib Bank',
      details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
      interest: "15.5% Loan Interest",
      website: 'Visit Website',
    },
    {
        image: '/assets/awash_International_Bank.png',
        name: 'Awash Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/abay.png',
        name: 'Abay Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/Dashen.png',
        name: 'Dashen Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/logo2x.png',
        name: 'Zemen Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/Hibret-bank-logo.jpg',
        name: 'Hibret Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/enat.jpg',
        name: 'Enat Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/addis.png',
        name: 'Addis Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
      {
        image: '/assets/Berhan-bank.webp',
        name: 'Birhan Bank',
        details: 'Widely used Internet banking, Most bank with several branches and ATMs, Prize Linked Saving, ',
        interest: "15.5% Loan Interest",
        website: 'Visit Website',
      },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const container = cardContainerRef.current;
    const cardWidth = isMobile ? container.offsetWidth : container.offsetWidth / 3;
    setVisibleCards(isMobile ? [cards[currentIndex]] : cards.slice(currentIndex, currentIndex + 3));
    container.scrollLeft = currentIndex * cardWidth;
  }, [currentIndex, cards, isMobile]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (isMobile && currentIndex < cards.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (!isMobile && currentIndex < cards.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <div className='w-full p-6 md:px-24 md:mb-5 text-lg '>
        <h3 className='font-bold text-2xl'>Banks</h3>
        <p className='text-sm text-gray-400'>List of banks available in Ethiopia</p>
      </div>

      <div className="card-slider">
        <button
          className={`nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="card-container mb-20" ref={cardContainerRef}>
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="card"
              id='ccard'
            >
              <div className=''>
                <div className='flex gap-6'>
                  <div className="card-image">
                    <img src={`${card.image}`} alt={card.name} />
                  </div>
                  <h3 className='font-bold'>{card.name}</h3>
                </div>
                <div className="card-content">
                  <p>{card.details}</p>
                  <p className='font-semibold'>{card.interest}</p>
                  <div className='flex items-center'>
                    <a href={card.website} >{card.website}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       <button
          className={`nav-button ${currentIndex === cards.length - 3 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={currentIndex === cards.length - 3}
        >
          <MdOutlineKeyboardArrowRight className='ml-5 md:ml-0' />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;