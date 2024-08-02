import React from "react";

const Footer = () =>{
    return(
        <div>
            <footer class="bg-white text-black py-4 mt-12">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center ">
    <div class="flex flex-col md:flex-row space-x-4 md:space-y-0  mt-2 md:mt-0 text-xs text-[#4A6D7C] items-center">
      
      <div class=" md:ml-0 text-xs text-[#4A6D7C]">&copy; 2017/2023 HahuCloud <sup>TM</sup> Ethiopia's Web Hosting.</div>
    </div>
    <div class="flex md:flex-row space-x-4 md:space-y-0  mt-2 md:mt-0 text-xs text-[#4A6D7C] ">
    <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        About Us
      </a>
      <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        Contact Us
      </a>
      <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        FAQs
      </a>
      <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        Term & Conditions
      </a>
      <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        VAT
      </a>
      <a href="#" class="hover:text-primary transition-colors duration-300 mb-2 md:mb-0">
        Sitemap
      </a>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Footer