import React from 'react'

const About = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between md:px-24">
    <div className="grid md:grid-cols-2 md:mt-0 mt-6 px-6">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            
            <p className=" md:mb-5 md:text-md font-light">Ethiopia's banking sector has been undergoing significant changes in recent years, with larger banks jockeying for position and smaller players being acquired or consolidating. Mergers and acquisitions have played a key role in shaping the country's top financial institutions.</p>
            
        </div>
        <img src="/assets/Digital wallet mobile app Illustration.jpeg" alt="" className="md:h-96 md:px-24 " />
    </div>
</div>
  )
}

export default About