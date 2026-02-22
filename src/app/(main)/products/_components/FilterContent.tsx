import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const filterCategories = [
  { id: "price", label: "Price Range", hasSlider: true },
  { id: "availability", label: "Availability", options: ["In Stock", "Pre-Order", "Upcoming"] },
  { id: "color", label: "Color", options: ["Titanium", "Black", "Silver", "Blue", "Gold"] },
  { id: "processor", label: "Processor", options: ["A18 Pro", "Snapdragon 8 Gen 4", "M4 Chip"] },
  { id: "ram-storage", label: "RAM & Storage", options: ["8/128GB", "12/256GB", "16/512GB"] },
  { id: "region", label: "Region", options: ["USA", "Global", "UK", "Japan"] },
  { id: "region-variant", label: "Region/Variant", options: ["Single Sim", "Dual Sim", "eSim"] },
  { id: "sim-network", label: "Sim/Network", options: ["5G Supported", "4G LTE"] },
  { id: "storage", label: "Storage", options: ["128GB", "256GB", "512GB", "1TB"] },
];

// 2. MOVE FILTERCONTENT OUTSIDE TO FIX THE RENDER ERROR
const FilterContent = ({ priceRange, setPriceRange }: { priceRange: number[], setPriceRange: (val: number[]) => void }) => {
  // Create an array of all IDs to keep them open
  const allCategoryIds = filterCategories.map(cat => cat.id);

  return (
    <div className="space-y-1 bg-white">
      <div className="flex items-center gap-2 pb-6 pt-4">
        <SlidersHorizontal size={18} className="text-[#c5a47e]" />
        <h3 className="font-black text-[#111416] uppercase tracking-tight">Filter Options</h3>
      </div>

      <Accordion 
        type="multiple" 
        defaultValue={allCategoryIds} 
        className="w-full space-y-2"
      >
        {filterCategories.map((filter) => (
          <AccordionItem 
            key={filter.id} 
            value={filter.id} 
            className="border-none bg-[#f3f3f3] rounded-sm overflow-hidden"
          >
            <AccordionTrigger className="px-5 py-4 hover:no-underline font-bold text-[13px] uppercase tracking-wider text-[#111416]">
              {filter.label}
            </AccordionTrigger>
            
            <AccordionContent className="bg-white px-5 pt-4 pb-6 border-x border-b border-zinc-100">
              {filter.hasSlider ? (
                <div className="pt-2">
                  <Slider
                    defaultValue={[0, 250000]}
                    max={250000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-6 bg-black mx-auto w-full max-w-xs"
                    
                  />
                  <div className="flex justify-between gap-2">
                    <div className="flex-1 p-2 bg-zinc-50 rounded border border-zinc-100 text-center">
                      <span className="text-[9px] text-zinc-400 block uppercase font-bold">Min</span>
                      <span className="text-xs font-black text-[#111416]">৳{priceRange[0]}</span>
                    </div>
                    <div className="flex-1 p-2 bg-zinc-50 rounded border border-zinc-100 text-center">
                      <span className="text-[9px] text-zinc-400 block uppercase font-bold">Max</span>
                      <span className="text-xs font-black text-[#111416]">৳{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {filter.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-3 group cursor-pointer">
                      <Checkbox id={`${filter.id}-${option}`} className="rounded-sm border-zinc-300 data-[state=checked]:bg-[#111416]" />
                      <label htmlFor={`${filter.id}-${option}`} className="text-[13px] font-semibold text-zinc-600 cursor-pointer group-hover:text-[#c5a47e] transition-colors">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="py-6 flex justify-center">
        <Button className="lg:w-full bg-[#111416] hover:bg-[#c5a47e] text-white p-4 lg:py-7 rounded-lg font-black uppercase tracking-[0.2em] text-[10px] transition-all">
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterContent;