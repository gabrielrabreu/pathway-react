import React, { PropsWithChildren } from "react";

import useTooltipContext from "./Tooltip.Context";

interface TooltipTriggerProps extends PropsWithChildren {}

export interface TooltipTriggerComponent
  extends React.FC<TooltipTriggerProps> {}

const TooltipTrigger: TooltipTriggerComponent = ({ children }) => {
  const { onShow, onHide } = useTooltipContext();

  return (
    <div
      onMouseEnter={onShow}
      onMouseLeave={onHide}
      data-testid="tooltip-trigger"
    >
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default TooltipTrigger;
