import React, { useState, useEffect, useRef } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Add star icons

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef(null);

  const cards = [
    {
        image: '/assets/CBE.png',
        name: 'Commercial Bank of Ethiopia',
        details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
      },
      {
        image: '/assets/download.png',
        name: 'Absyinia Bank',
        details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
         
      },
      {
        image: '/assets/COOP.png',
        name: 'COOP Bank of Oromia',
        details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
      },
      {
        image: '/assets/Nib.jpeg',
        name: 'Nib Bank',
        details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
      },
      {
          image: '/assets/awash_International_Bank.png',
          name: 'Awash Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/abay.png',
          name: 'Abay Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/Dashen.png',
          name: 'Dashen Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/logo2x.png',
          name: 'Zemen Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/Hibret-bank-logo.jpg',
          name: 'Hibret Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/enat.jpg',
          name: 'Enat Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/addis.png',
          name: 'Addis Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
        },
        {
          image: '/assets/Berhan-bank.webp',
          name: 'Birhan Bank',
          details: 'Pre Paid Cards',
          sdetail: "Debit card linked with Zemen Account",
          
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
      <div className='w-full px-6 md:px-24 md:mb-5 text-lg'>
        <h3 className='font-bold text-2xl'>Customer Favorite Banks In Ethiopia</h3>
      </div>
        
      <div className="card-slider">
        <button
          className={`nav-button ${currentIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="card-container " ref={cardContainerRef}>
          {visibleCards.map((card, index) => (
            <div key={index} className="card">
              <div className='py-6'>
                <div className="card-image">
                  <img src={`${card.image}`} alt={card.name} />
                </div>
                <div className="card-content">
                  <h3 className='font-bold text-lg'>{card.name}</h3>
                  <p className='font-bold'>{card.details}</p>
                  <p className='text-xs'>{card.sdetail}</p>
                  
                  <div className="rating flex">
                    {/* Example of rating */}
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < 4 ? <FaStar color="gold" /> : <FaRegStar color="gold" />}
                      </span>
                    ))}
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
