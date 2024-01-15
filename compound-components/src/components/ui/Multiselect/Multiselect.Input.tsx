import React, { PropsWithChildren } from "react";

import useMultiselectContext from "./Multiselect.Context";

interface MultiselectInputProps extends PropsWithChildren {}

export interface MultiselectInputComponent
  extends React.FC<MultiselectInputProps> {}

const MultiselectInput: MultiselectInputComponent = ({ children }) => {
  const { selectedOptions, onToggleDropdown } = useMultiselectContext();

  return (
    <div
      className={`
        w-full flex items-center justify-between p-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer
        ${selectedOptions.length === 0 && "text-gray-500"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onToggleDropdown();
      }}
      data-testid="multiselect-toggle"
    >
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default MultiselectInput;
