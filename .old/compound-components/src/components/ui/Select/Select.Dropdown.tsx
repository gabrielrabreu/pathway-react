import React, { PropsWithChildren } from "react";

import useSelectContext from "./Select.Context";

interface SelectDropdownProps extends PropsWithChildren {}

export interface SelectDropdownComponent
  extends React.FC<SelectDropdownProps> {}

const SelectDropdown: SelectDropdownComponent = ({ children }) => {
  const { isDropdownOpen } = useSelectContext();

  return (
    isDropdownOpen && (
      <ul
        className="max-h-60 overflow-y-auto mt-2 bg-white border border-gray-300 rounded-md shadow-sm absolute z-50 left-0 right-0"
        data-testid="select-dropdown"
      >
        <React.Fragment>{children}</React.Fragment>
      </ul>
    )
  );
};

export default SelectDropdown;
