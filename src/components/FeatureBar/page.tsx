import { ShieldCheck, Zap, CreditCard, RotateCcw, Tag } from 'lucide-react';

const FeatureBar = () => {
  const features = [
    { icon: <ShieldCheck className="text-emerald-500" />, text: "100% Genuine Products" },
    { icon: <Zap className="text-blue-500" />, text: "Super fast Delivery" },
    { icon: <CreditCard className="text-orange-500" />, text: "36 Months Installments" },
    { icon: <RotateCcw className="text-purple-500" />, text: "2 Years Replacement" },
    { icon: <Tag className="text-red-500" />, text: "Best Price in BD" },
  ];

  return (
    <div className="max-w-7xl mx-auto my-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-gray-50 rounded-2xl p-8  shadow-sm border border-gray-100">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
            <span className="shrink-0">{f.icon}</span>
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar; 