import React from "react";
import { ChevronDown } from "lucide-react";

import useSelectContext from "./Select.Context";

interface SelectIndicatorProps {}

export interface SelectIndicatorComponent
  extends React.FC<SelectIndicatorProps> {}

const SelectIndicator: SelectIndicatorComponent = () => {
  const { isDropdownOpen } = useSelectContext();

  return (
    <ChevronDown
      className={`ml-2 flex-shrink-0 ${isDropdownOpen && "rotate-180"}`}
      size={20}
      data-testid="select-indicator"
    />
  );
};

export default SelectIndicator;
