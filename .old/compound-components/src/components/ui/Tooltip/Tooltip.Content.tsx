import React, { PropsWithChildren } from "react";

import useTooltipContext from "./Tooltip.Context";

interface TooltipContentProps extends PropsWithChildren {}

export interface TooltipContentComponent
  extends React.FC<TooltipContentProps> {}

const TooltipContent: TooltipContentComponent = ({ children }) => {
  const { isVisible } = useTooltipContext();

  return (
    <div
      className={`
        absolute px-3 py-1 bottom-full mb-2
        bg-white text-black 
        rounded-lg shadow-md 
        transition-opacity duration-300 ease-in-out
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
      data-testid="tooltip-content"
    >
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default TooltipContent;
