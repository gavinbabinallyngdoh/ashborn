"use client";

import { SearchCheck, Cpu, ArrowRight, Atom, Globe, Paperclip, Mic, AudioLines } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"
import { AIModelsOption } from "@/services/Shared";


export default function InputBox() {

  return (

    <div className="flex flex-col items-center justify-center w-full relative z-10 px-4 mt-[-60px]">
      <Tabs defaultValue="Search" className="w-full max-w-2xl relative">
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.05)] relative">

          {/*Input Box */}
          <div className="mb-12">
            <TabsContent value="Search">
              <div className="flex items-center gap-3 border-b border-white/10 focus-within:border-white/40 transition">
                <input
                  type="text"
                  placeholder="Ask anything..."
                  onChange={(e) => setUserSearchInput(e.target.value)}
                  className="flex-1 bg-transparent py-4 text-white placeholder:text-white/40 outline-none"
                />
              </div>
            </TabsContent>

            <TabsContent value="Research">
              <div className="flex items-center gap-3 border-b border-white/10 focus-within:border-white/40 transition">
                <input
                  type="text"
                  placeholder="Research deeply..."
                  onChange={(e) => setUserSearchInput(e.target.value)}
                  className="flex-1 bg-transparent py-4 text-white placeholder:text-white/40 outline-none"
                />
              </div>
            </TabsContent>
          </div>

          {/* ✅ Bottom Section */}
          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
            
            {/* Bottom Left: Tabs */}
            <TabsList className="flex gap-3 bg-transparent">
              <TabsTrigger
                value="Search"
                className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full text-white/70 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black transition"
                
              >
                <SearchCheck className="w-4 h-4" /> Search
              </TabsTrigger>

              <TabsTrigger
                value="Research"
                className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full text-white/70 hover:text-white data-[state=active]:bg-white data-[state=active]:text-black transition"
                
              >
                <Atom className="w-4 h-4" /> Research
              </TabsTrigger>
            </TabsList>

            {/* Bottom Right: Icons */}
            <div className="flex items-center gap-4">

              <DropdownMenu>

                <DropdownMenuTrigger>

                  <Button>

                    <Cpu className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer" />
                  
                  </Button>

                </DropdownMenuTrigger>

                <DropdownMenuContent>

                  {/*<DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />*/}

                  
                    {AIModelsOption.map((model, index) => (
                    <DropdownMenuItem key={index}>
                      <div className="mb-2">
                        <h2 className="text-sm">{model.name}</h2>
                        <p className="text-xs">{model.desc}</p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  

                </DropdownMenuContent>

              </DropdownMenu>

              <Globe className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer" />
              
              <Paperclip className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer" />
              
              <Mic className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer" />

              <Button >

                <AudioLines className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer" />
                <ArrowRight className="text-gray-500 h-5 w-5 hover:text-white transition cursor-pointer"/>

              </Button>

            </div>

          </div>

        </div>

      </Tabs>

    </div>

  );

}
