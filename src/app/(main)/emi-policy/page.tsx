"use client";

import { 
  Info, 
  CheckCircle2, 
  ShieldCheck, 
  Banknote,
  Percent
} from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/src/components/shared/Container";

const EMIPolicy = () => {
  return (
    <main className="bg-white min-h-screen pb-20">
      {/* 1. Page Header */}
      <section className="bg-[#111416] py-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c5a47e] opacity-10 blur-[100px] rounded-full -mr-20" />
        <Container>
          <div className="max-w-3xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
              EMI <span className="text-[#c5a47e]">Policy</span>
            </h1>
            <p className="text-zinc-400 text-lg font-medium max-w-xl">
              Shop your favorite gadgets today and pay later with our flexible 0% interest EMI plans available for over 20+ major banks.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        {/* 2. Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Percent className="text-[#c5a47e]" />, title: "0% Interest", desc: "Available for 3 & 6 months" },
            { icon: <ShieldCheck className="text-[#c5a47e]" />, title: "Secure Process", desc: "100% bank-verified transactions" },
            { icon: <Banknote className="text-[#c5a47e]" />, title: "Low Processing Fee", desc: "Starts from only 1% fee" },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-xl rounded-3xl bg-white p-2">
              <CardContent className="flex items-center gap-5 p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#fafafa] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-[#111416] uppercase text-sm tracking-tight">{item.title}</h4>
                  <p className="text-xs text-zinc-500 font-bold">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3. EMI Breakdown Table */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-[#111416] tracking-tighter uppercase">Supported <span className="text-zinc-300">Tenures</span></h2>
              <div className="h-1 w-12 bg-[#c5a47e] rounded-full" />
            </div>
            <p className="text-sm font-bold text-zinc-400 uppercase italic flex items-center gap-2">
              <Info size={14} /> *Processing fees may vary by bank
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-100 overflow-hidden bg-white shadow-sm">
            <Table>
              <TableHeader className="bg-zinc-50">
                <TableRow>
                  <TableHead className="font-black text-[#111416] py-6 px-8">EMI Tenure</TableHead>
                  <TableHead className="font-black text-[#111416]">Interest Rate</TableHead>
                  <TableHead className="font-black text-[#111416]">Processing Fee</TableHead>
                  <TableHead className="font-black text-[#111416] text-right px-8">Availability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { months: "3 Months", interest: "0%", fee: "1.5%", status: "All Banks" },
                  { months: "6 Months", interest: "0%", fee: "2.5%", status: "Selected Banks" },
                  { months: "12 Months", interest: "9% - 12%", fee: "3.5%", status: "All Banks" },
                  { months: "24 Months", interest: "13% - 15%", fee: "5%", status: "Credit Cards Only" },
                ].map((row, i) => (
                  <TableRow key={i} className="hover:bg-zinc-50/50 transition-colors">
                    <TableCell className="font-bold py-6 px-8 text-zinc-700">{row.months}</TableCell>
                    <TableCell className="font-black text-[#c5a47e]">{row.interest}</TableCell>
                    <TableCell className="font-medium text-zinc-500">{row.fee}</TableCell>
                    <TableCell className="text-right px-8">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase bg-zinc-100 px-3 py-1 rounded-full">
                        <CheckCircle2 size={12} className="text-green-500" /> {row.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 4. Terms & Conditions (Accordion) */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#111416] tracking-tighter uppercase text-center mb-10">Frequently Asked <span className="text-zinc-300">Questions</span></h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-zinc-100 rounded-2xl px-6 bg-white overflow-hidden shadow-sm">
              <AccordionTrigger className="hover:no-underline font-bold text-[#111416]">What is the minimum purchase for EMI?</AccordionTrigger>
              <AccordionContent className="text-zinc-500 leading-relaxed">
                The minimum purchase amount to avail EMI facilities is ৳5,000. This applies to any single product or a total cart value exceeding this amount.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-zinc-100 rounded-2xl px-6 bg-white shadow-sm">
              <AccordionTrigger className="hover:no-underline font-bold text-[#111416]">Which banks are supported?</AccordionTrigger>
              <AccordionContent className="text-zinc-500 leading-relaxed">
                We support credit card EMI from all major banks in Bangladesh, including City Bank, SCB, EBL, BRAC, DBBL, MTB, and more. Online EMI is available during the checkout process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-zinc-100 rounded-2xl px-6 bg-white shadow-sm">
              <AccordionTrigger className="hover:no-underline font-bold text-[#111416]">Is Debit Card EMI available?</AccordionTrigger>
              <AccordionContent className="text-zinc-500 leading-relaxed">
                Currently, EMI facilities are strictly limited to Credit Card holders. However, we sometimes offer Cardless EMI through partner financial institutions (MFS) during special campaigns.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </Container>
    </main>
  );
};

export default EMIPolicy;