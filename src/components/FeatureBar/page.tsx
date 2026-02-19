import { ShieldCheck, Zap, CreditCard, RotateCcw } from "lucide-react";

const FeatureBar = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-emerald-500" />,
      text: "100% Genuine Products",
    },
    { icon: <Zap className="text-blue-500" />, text: "Super fast Delivery" },
    {
      icon: <CreditCard className="text-orange-500" />,
      text: "36 Months Installments",
    },
    {
      icon: <RotateCcw className="text-purple-500" />,
      text: "2 Years Replacement",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 px-4 md:px-0">
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4  bg-gray-50  rounded-2xl  p-2 md:p-8 shadow-sm border border-gray-100">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-1 md:gap-3 justify-start sm:justify-center lg:justify-start"
          >
            <span className="shrink-0">{f.icon}</span>
            <span className="text-[10px] sm:text-xs md:text-sm md:font-semibold text-gray-700 whitespace-nowrap">
              {f.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
