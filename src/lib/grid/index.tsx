import React from "react";

interface Style {
  style?: {};
  className?: string;
}

interface GridProps extends Style {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export default function Grid({
  children,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
  xxl = 4,
}: GridProps) {
  const grid = new Array(children);
  return (
    <div
      className={`grid grid-cols-2 gap-2 sm:grid-cols-${sm} sm:gap-${sm} md:grid-cols-${md} md:gap-${md} lg:grid-cols-${lg} lg:gap-${lg} xl:grid-cols-${xl} xl:gap-${xl} 2xl:grid-cols-${xxl} 2xl:gap-${xxl}`}
    >
      {React.Children.map(children, (e, i) => {
        return e;
      })}
    </div>
  );
}
