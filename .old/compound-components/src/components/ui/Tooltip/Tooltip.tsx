import React, { PropsWithChildren, useState } from "react";

import TooltipTrigger, { TooltipTriggerComponent } from "./Tooltip.Trigger";
import TooltipContent, { TooltipContentComponent } from "./Tooltip.Content";
import { TooltipContext } from "./Tooltip.Context";

interface TooltipProps extends PropsWithChildren {}

interface TooltipComponent extends React.FC<TooltipProps> {
  Trigger: TooltipTriggerComponent;
  Content: TooltipContentComponent;
}

const Tooltip: TooltipComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onShow = () => setIsVisible(true);
  const onHide = () => setIsVisible(false);

  return (
    <TooltipContext.Provider
      value={{
        isVisible,
        onShow,
        onHide,
      }}
    >
      <div className="relative inline-block" data-testid="tooltip-container">
        <React.Fragment>{children}</React.Fragment>
      </div>
    </TooltipContext.Provider>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export default Tooltip;
