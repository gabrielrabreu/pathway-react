import { createContext, useContext } from "react";

interface TooltipContext {
  isVisible: boolean;
  onShow: () => void;
  onHide: () => void;
}

export const TooltipContext = createContext<TooltipContext | undefined>(
  undefined
);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error(
      "useTooltipContext should be used within the scope of a Tooltip component"
    );
  }

  return context;
};

export default useTooltipContext;
