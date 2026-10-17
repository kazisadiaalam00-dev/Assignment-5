import React from 'react';

const Footer = () => {
    return (
<footer class="bg-white text-gray-600 font-sans border-t border-gray-100">
  <div class="max-w-7xl mx-auto px-6 py-12 lg:px-8">
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      
     
      <div class="lg:col-span-2 space-y-4">
       
        <div class="flex items-center space-x-2">
          <div class="bg-pink-600 text-white font-bold text-sm px-2 py-1 rounded-md">
            DS
          </div>
          <span class="text-xl font-bold text-gray-900 tracking-tight">
            Dev <span class="text-pink-600">Stack</span>
          </span>
        </div>

        
        <p class="text-sm text-gray-500 max-w-sm leading-relaxed">
          Curated tools, technologies, and resources for developers building modern software.
        </p>

       
        <div class="flex items-center space-x-4 pt-2 text-sm font-medium text-gray-600">
          <a href="#" class="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="#" class="hover:text-gray-900 transition-colors">Twitter</a>
          <a href="#" class="hover:text-gray-900 transition-colors">LinkedIn</a>
        </div>
      </div>

      
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
          PRODUCT
        </h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-gray-900 transition-colors">Home</a></li>
          <li><a href="#" class="hover:text-gray-900 transition-colors">Technologies</a></li>
          <li><a href="#" class="hover:text-gray-900 transition-colors">Projects</a></li>
        </ul>
      </div>

    
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
          COMPANY
        </h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-gray-900 transition-colors">About</a></li>
          <li><a href="#" class="hover:text-gray-900 transition-colors">Contact</a></li>
          <li><a href="#" class="hover:text-gray-900 transition-colors">Careers</a></li>
        </ul>
      </div>

      
      <div>
        <h3 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">
          LEGAL
        </h3>
        <ul class="space-y-3 text-sm text-gray-500">
          <li><a href="#" class="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-gray-900 transition-colors">Terms of Service</a></li>
        </ul>
      </div>

    </div>

    
    <div class="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
      <p>© 2026 Dev Stack. All rights reserved.</p>
      <div class="flex space-x-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-gray-600 transition-colors">Privacy</a>
        <a href="#" class="hover:text-gray-600 transition-colors">Terms</a>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;