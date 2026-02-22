"use client";

import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Search,
  ExternalLink,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/src/components/shared/Container";

const stores = [
  {
    id: 1,
    name: "Jamuna Future Park (Flagship)",
    address: "Level 4, Block C, Shop 04A, Kuril, Dhaka",
    phone: "+880 1733-564455",
    hours: "10:00 AM - 9:00 PM",
    closed: "Wednesday",
    type: "Flagship Store",
  },
  {
    id: 2,
    name: "Bashundhara City",
    address: "Level 6, Block D, Shop 57-59, Panthapath, Dhaka",
    phone: "+880 1910-116611",
    hours: "10:30 AM - 9:00 PM",
    closed: "Tuesday",
    type: "Experience Center",
  },
  {
    id: 3,
    name: "Gulshan Avenue",
    address: "Rupayan Golden Age, 99 Gulshan Ave, Dhaka 1212",
    phone: "+880 1611-010101",
    hours: "10:00 AM - 8:30 PM",
    closed: "Open Everyday",
    type: "Retail Outlet",
  },
  {
    id: 4,
    name: "Uttara Sector 11",
    address: "36, Khawja Gareeb-e-Newaz Avenue, Uttara, Dhaka",
    phone: "+880 1799-828248",
    hours: "10:00 AM - 9:00 PM",
    closed: "Open Everyday",
    type: "Retail Outlet",
  },
];

const StoreLocations = () => {
  return (
    <main className="bg-[#fafafa] min-h-screen pb-20">
      {/* 1. Hero Header */}
      <section className="bg-[#111416] py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a47e] opacity-20 blur-[100px]" />
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
              Visit <span className="text-[#c5a47e]">Us</span>
            </h1>
            <p className="text-zinc-400 text-lg font-medium">
              Experience the latest technology firsthand. Visit any of our 15+
              locations across Bangladesh for expert advice and hands-on demos.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Search & Filter Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-zinc-100 py-4 shadow-sm">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                size={18}
              />
              <Input
                placeholder="Search by area (e.g. Uttara, Gulshan...)"
                className="pl-12 py-6 rounded-xl border-zinc-100 bg-zinc-50"
              />
            </div>
            <Button className="w-full md:w-auto bg-[#c5a47e] text-[#111416] font-bold px-8 py-6 rounded-xl">
              Find Nearest Store
            </Button>
          </div>
        </Container>
      </div>

      {/* 3. Stores Grid */}
      <section className="mt-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {stores.map((store) => (
              <Card
                key={store.id}
                className="group border-none shadow-lg shadow-zinc-200/50 rounded-4xl overflow-hidden bg-white hover:ring-2 hover:ring-[#c5a47e] transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                   
                    <div className="md:w-1/3 bg-zinc-200 relative min-h-[250px] overflow-hidden ml-5 rounded-2xl">
                      <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        className=" transition-all duration-500"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(store.name + " " + store.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      ></iframe>

                      {/* Overlay Badge */}
                      <Badge className="absolute top-4 left-4 bg-[#111416] text-white hover:bg-[#c5a47e] hover:text-[#111416] border-none font-black text-[9px] uppercase tracking-widest px-3 py-1 shadow-lg transition-colors z-10">
                        {store.type}
                      </Badge>

                      {/* Subtle Gradient Overlay to blend with the card */}
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]"></div>
                    </div>


                    <div className="p-4 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-[#111416] tracking-tight mb-4 group-hover:text-[#c5a47e] transition-colors">
                          {store.name}
                        </h3>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-start gap-3 text-sm text-zinc-500 font-medium">
                            <MapPin
                              size={18}
                              className="text-[#c5a47e] shrink-0"
                            />
                            <span>{store.address}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                            <Phone
                              size={18}
                              className="text-[#c5a47e] shrink-0"
                            />
                            <span>{store.phone}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                            <Clock
                              size={18}
                              className="text-[#c5a47e] shrink-0"
                            />
                            <span>
                              {store.hours}{" "}
                              <span className="text-red-400 text-[10px] ml-1">
                                ({store.closed} Closed)
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="rounded-xl border-zinc-200 font-bold text-xs uppercase hover:bg-[#111416] hover:text-white"
                        >
                          <Navigation size={14} className="mr-2" /> Directions
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-xl border-zinc-200 hover:text-[#c5a47e]"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default StoreLocations;
