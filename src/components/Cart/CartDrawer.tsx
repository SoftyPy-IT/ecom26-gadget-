"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function CartDrawer({ isOpen, setIsOpen }: CartDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
      <DrawerContent className="h-full w-full max-w-md rounded-l-3xl rounded-r-none border-l border-zinc-800 bg-white">
        {/* Header */}
        <div className="flex flex-col h-full">
          <DrawerHeader className="border-b bg-[#111416] text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-[#e2c7a8]" />
                <DrawerTitle className="font-black uppercase tracking-widest text-sm">
                  Your Gadget Cart
                </DrawerTitle>
              </div>
              <DrawerClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                >
                  <X size={24} />
                </Button>
              </DrawerClose>
            </div>
            <DrawerDescription className="text-zinc-400 text-[10px] uppercase font-bold mt-2">
              Review items before checkout
            </DrawerDescription>
          </DrawerHeader>

          {/* Cart Items Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Example Product Row */}
            <div className="flex gap-4 pb-6 border-b border-zinc-100">
              <div className="w-20 h-20 bg-zinc-50 rounded-xl border border-zinc-100" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-zinc-900 leading-tight">
                  iPhone 15 Pro Max
                </h4>
                <p className="text-[#111416] font-black text-sm mt-1">
                  ৳145,000
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">
                    Qty: 1
                  </span>
                  <button className="text-red-400 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Empty State (Shown if no items) */}
            {/* <div className="h-full flex flex-col items-center justify-center opacity-40">
                <ShoppingBag size={48} className="mb-4" />
                <p className="font-bold uppercase text-xs">Cart is empty</p>
            </div> */}
          </div>

          {/* Footer Actions */}
          <DrawerFooter className="border-t bg-zinc-50 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-zinc-500 uppercase text-xs tracking-widest">
                Subtotal
              </span>
              <span className="text-2xl font-black text-[#111416]">
                ৳145,000
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Link href="/cart" className="w-full">
                <Button
                  variant="outline"
                  className="w-full py-6 border-2 border-[#111416] text-[#111416] font-black uppercase text-xs rounded-xl hover:bg-zinc-100 transition-all"
                >
                  See Full Details
                </Button>
              </Link>

              <Button className="w-full py-6 bg-[#111416] text-[#e2c7a8] font-black uppercase text-xs rounded-xl hover:bg-black transition-all shadow-lg">
                Checkout Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
