import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className = "", id }: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`w-full flex justify-center bg-transparent ${className}`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:px-0 transition-all duration-300">
        {children}
      </div>
    </section>
  );
};

export default Container;
