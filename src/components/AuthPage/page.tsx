/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import { 
//   Mail, Lock, User, ArrowRight, 
//   Github, Chrome, Eye, EyeOff 
// } from "lucide-react";
// import Link from "next/link";

// export default function AuthPage() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
//       <div className="max-w-[1100px] w-full grid lg:grid-cols-2 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100">
        
//         {/* LEFT SIDE: Visual/Branding */}
//         <div className="hidden lg:flex bg-[#111416] p-12 flex-col justify-between relative overflow-hidden">
//           {/* Decorative background element */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2c7a8] opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          
//           <div className="relative z-10">
//             <Link href="/" className="text-2xl font-black text-white tracking-tighter">
//               GADGET<span className="text-[#e2c7a8]">™</span>
//             </Link>
//             <h2 className="text-4xl font-black text-white mt-20 leading-tight uppercase italic">
//               {isLogin ? "Welcome back to the future." : "Join the elite tech club."}
//             </h2>
//             <p className="text-zinc-400 mt-4 max-w-xs text-sm font-medium leading-relaxed">
//               Experience the next generation of gadget shopping with gadget Exclusive deals.
//             </p>
//           </div>

//           <div className="relative z-10 flex gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
//             <span>© 2026 gadget</span>
//             <span>Privacy Policy</span>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Form */}
//         <div className="bg-white p-4 md:p-16 flex flex-col justify-center">
//           <div className="max-w-md mx-auto w-full">
//             <h3 className="text-2xl font-black text-zinc-900 uppercase mb-2">
//               {isLogin ? "Sign In" : "Create Account"}
//             </h3>
//             <p className="text-zinc-500 text-sm mb-8 font-medium">
//               {isLogin ? "Don't have an account?" : "Already a member?"} 
//               <button 
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-[#111416] font-black ml-1 hover:underline underline-offset-4 transition-all"
//               >
//                 {isLogin ? "Join now" : "Sign in here"}
//               </button>
//             </p>

//             <form className="space-y-4">
//               {!isLogin && (
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Full Name</label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
//                     <input 
//                       type="text" 
//                       placeholder="John Doe" 
//                       className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
//                     />
//                   </div>
//                 </div>
//               )}

//               <div className="space-y-1">
//                 <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Email Address</label>
//                 <div className="relative">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
//                   <input 
//                     type="email" 
//                     placeholder="name@example.com" 
//                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <div className="flex justify-between items-center px-1">
//                   <label className="text-[10px] font-black uppercase text-zinc-400">Password</label>
//                   {isLogin && <Link href="#" className="text-[10px] font-bold text-zinc-400 hover:text-black uppercase">Forgot?</Link>}
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
//                   <input 
//                     type={showPassword ? "text" : "password"} 
//                     placeholder="••••••••" 
//                     className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-12 text-sm outline-none focus:border-[#111416] transition-all"
//                   />
//                   <button 
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>

//               <button className="w-full bg-[#111416] text-[#e2c7a8] py-4 rounded-xl font-black uppercase text-xs tracking-[0.1em] hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-xl shadow-zinc-200 mt-6">
//                 {isLogin ? "Login" : "Create Account"}
//                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>

//             <div className="relative my-10">
//               <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-100"></span></div>
//               <div className="relative flex justify-center text-[10px] font-black uppercase"><span className="bg-white px-4 text-zinc-400 tracking-widest">Or continue with</span></div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <button className="flex items-center justify-center gap-3 py-3 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all text-sm font-bold">
//                 <Chrome size={18} /> Google
//               </button>
//               <button className="flex items-center justify-center gap-3 py-3 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all text-sm font-bold">
//                 <Github size={18} /> GitHub
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import  { useState, FormEvent } from "react";
import {
  Mail, Lock, User, ArrowRight,
  Github, Chrome, Eye, EyeOff
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Step = "login" | "register" | "verify";

export default function AuthPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [verificationToken, setVerificationToken] = useState(""); // from registration

  const resetForm = () => {
    setError("");
    setLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (step === "login") {
        // LOGIN
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || "Login failed");

        // Store tokens (in localStorage for simplicity)
        localStorage.setItem("accessToken", json.data.accessToken);
        localStorage.setItem("refreshToken", json.data.refreshToken);
        // Redirect to home or dashboard
        router.push("/");
      } else if (step === "register") {
        // REGISTER
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, email, password }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || "Registration failed");

        // Save verification token and move to verify step
        setVerificationToken(json.data.token);
        setStep("verify");
      } else if (step === "verify") {
        // VERIFY EMAIL
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: verificationToken, code: verifyCode }),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.message || "Verification failed");

        // After verification, we get tokens – store them
        localStorage.setItem("accessToken", json.data.accessToken);
        localStorage.setItem("refreshToken", json.data.refreshToken);
        router.push("/");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const switchStep = (newStep: Step) => {
    resetForm();
    setStep(newStep);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-[1100px] w-full grid lg:grid-cols-2 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100">

        {/* LEFT SIDE: Visual/Branding */}
        <div className="hidden lg:flex bg-[#111416] p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e2c7a8] opacity-10 rounded-full -mr-20 -mt-20 blur-3xl"></div>

          <div className="relative z-10">
            <Link href="/" className="text-2xl font-black text-white tracking-tighter">
              GADGET<span className="text-[#e2c7a8]">™</span>
            </Link>
            <h2 className="text-4xl font-black text-white mt-20 leading-tight uppercase italic">
              {step === "login" && "Welcome back to the future."}
              {step === "register" && "Join the elite tech club."}
              {step === "verify" && "Check your email."}
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xs text-sm font-medium leading-relaxed">
              {step === "verify"
                ? "We've sent a 4‑digit code to your email. Enter it below to verify your account."
                : "Experience the next generation of gadget shopping with exclusive deals."}
            </p>
          </div>

          <div className="relative z-10 flex gap-6 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            <span>© 2026 gadget</span>
            <span>Privacy Policy</span>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="bg-white p-4 md:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Title and toggle */}
            {step !== "verify" ? (
              <>
                <h3 className="text-2xl font-black text-zinc-900 uppercase mb-2">
                  {step === "login" ? "Sign In" : "Create Account"}
                </h3>
                <p className="text-zinc-500 text-sm mb-8 font-medium">
                  {step === "login" ? "Don't have an account?" : "Already a member?"}
                  <button
                    onClick={() => switchStep(step === "login" ? "register" : "login")}
                    className="text-[#111416] font-black ml-1 hover:underline underline-offset-4 transition-all"
                  >
                    {step === "login" ? "Join now" : "Sign in here"}
                  </button>
                </p>
              </>
            ) : (
              <h3 className="text-2xl font-black text-zinc-900 uppercase mb-2">
                Verify Email
              </h3>
            )}

            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Register fields */}
              {step === "register" && (
                <>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">First Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder="John"
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        placeholder="Doe"
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Verify field */}
              {step === "verify" ? (
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">4‑Digit Code</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input
                      type="text"
                      value={verifyCode}
                      onChange={(e) => setVerifyCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      required
                      maxLength={4}
                      placeholder="1234"
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
                    />
                  </div>
                </div>
              ) : (
                <>
                  {/* Email (common for login & register) */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="name@example.com"
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#111416] transition-all"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center px-1">
                      <label className="text-[10px] font-black uppercase text-zinc-400">Password</label>
                      {step === "login" && (
                        <Link href="#" className="text-[10px] font-bold text-zinc-400 hover:text-black uppercase">
                          Forgot?
                        </Link>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        placeholder="••••••••"
                        className="w-full bg-zinc-50 border border-zinc-100 rounded-xl py-4 pl-12 pr-12 text-sm outline-none focus:border-[#111416] transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#111416] text-[#e2c7a8] py-4 rounded-xl font-black uppercase text-xs tracking-[0.1em] hover:bg-black transition-all flex items-center justify-center gap-2 group shadow-xl shadow-zinc-200 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    {step === "login" && "Login"}
                    {step === "register" && "Create Account"}
                    {step === "verify" && "Verify Email"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* Social logins – only for login/register steps */}
            {step !== "verify" && (
              <>
                <div className="relative my-10">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-100"></span>
                  </div>
                  <div className="relative flex justify-center text-[10px] font-black uppercase">
                    <span className="bg-white px-4 text-zinc-400 tracking-widest">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-3 py-3 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all text-sm font-bold">
                    <Chrome size={18} /> Google
                  </button>
                  <button className="flex items-center justify-center gap-3 py-3 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all text-sm font-bold">
                    <Github size={18} /> GitHub
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}