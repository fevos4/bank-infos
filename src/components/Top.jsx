import React from 'react'

const Top = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-between px-6 md:px-24">
    <div className="grid md:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <h3 className='font-bold text-2xl'>Total number of banks in Ethiopia</h3>
             <ul className='font-light mt-4'>
             <li>1 Central bank</li>
            <li>1 Government Commercial bank</li>
            <li>28 Private banks</li>
            <li>3 Interest free banks</li>
            </ul>
           </div>
        <img src="/assets/Group.png" alt="" className="md:h-52 md:mt-36 w-96" />
    </div>
</div>
  )
}

export default Top;