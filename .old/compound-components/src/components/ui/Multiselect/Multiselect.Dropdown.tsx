import React, { PropsWithChildren } from "react";

import useMultiselectContext from "./Multiselect.Context";

interface MultiselectDropdownProps extends PropsWithChildren {}

export interface MultiselectDropdownComponent
  extends React.FC<MultiselectDropdownProps> {}

const MultiselectDropdown: MultiselectDropdownComponent = ({ children }) => {
  const { isDropdownOpen } = useMultiselectContext();

  return (
    isDropdownOpen && (
      <ul
        className="max-h-60 overflow-y-auto mt-2 bg-white border border-gray-300 rounded-md shadow-sm absolute z-50 left-0 right-0"
        data-testid="multiselect-dropdown"
      >
        <React.Fragment>{children}</React.Fragment>
      </ul>
    )
  );
};

export default MultiselectDropdown;
