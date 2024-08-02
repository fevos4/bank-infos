import React from 'react'

const Rate = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between md:px-24 px-6">
    <div className="grid md:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center md:items-start w-full px-2 md:py-8">
            <h3 className='font-bold text-2xl'>How We Rate the Best Banks in Ethiopia</h3>
            <p className="py-3 md:mb-3  md:text-md font-light">Based on the features below, we were able to create a score between 1-10, where 1 is a low score and 10 being the best possible score:</p>
           <div className='font-light '>
           <li>Good customer service.</li>
            <li>Easily accessible information.</li>
            <li>Smooth online banking.</li>
            <li>Easy to use mobile banking services</li>
            <li>Availability of credit and loans.</li>
            <li>Low loan interest rate.</li>
            <li>High saving interest rate.</li>
            <li>Great diaspora benefits.</li>
           </div>
            

        </div>
        <img src="/assets/rate.png" alt="" className="md:h-96 h-64 md:w-auto  md:px-24" />
    </div>
</div>
  )
}

export default Rate;