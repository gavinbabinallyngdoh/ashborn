"use client";

import React from 'react'

export default function Navbar() {

    return (
    
        <nav className='flex justify-between items-center px-10 py-6 border-b border-white/10'>

            <div className='flex items-center gap-8'>

                <h1 className='text-lg font-bold tracking-wider'>ashborn</h1>

                <ul className='hidden md:flex gap-6 text-sm text-white/70'>

                    <li className="hover:text-white cursor-pointer">API</li>
          
                    <li className="hover:text-white cursor-pointer">Docs</li>
          
                    <li className="hover:text-white cursor-pointer">Company</li>
          
                    <li className="hover:text-white cursor-pointer">Tokens</li>
          
                    <li className="hover:text-white cursor-pointer">Courses</li>
          
                    <li className="hover:text-white cursor-pointer">News</li>

                </ul>

            </div>

            <button className="border border-white/20 text-sm rounded-full px-5 py-2 hover:bg-white hover:text-black transition">
            
                Try ashborn
        
            </button>

        </nav>
  
    )

}

