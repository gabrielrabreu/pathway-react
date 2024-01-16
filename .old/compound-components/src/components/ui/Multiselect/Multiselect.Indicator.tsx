import React from "react";
import { ChevronDown } from "lucide-react";

import useMultiselectContext from "./Multiselect.Context";

interface MultiselectIndicatorProps {}

export interface MultiselectIndicatorComponent
  extends React.FC<MultiselectIndicatorProps> {}

const MultiselectIndicator: MultiselectIndicatorComponent = () => {
  const { isDropdownOpen } = useMultiselectContext();

  return (
    <ChevronDown
      className={`ml-2 flex-shrink-0 ${isDropdownOpen && "rotate-180"}`}
      size={20}
      data-testid="multiselect-indicator"
    />
  );
};

export default MultiselectIndicator;
