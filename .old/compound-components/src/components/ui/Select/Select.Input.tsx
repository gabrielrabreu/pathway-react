import React, { PropsWithChildren } from "react";
import useSelectContext from "./Select.Context";

interface SelectInputProps extends PropsWithChildren {}

export interface SelectInputComponent extends React.FC<SelectInputProps> {}

const SelectInput: SelectInputComponent = ({ children }) => {
  const { selectedOption, onToggleDropdown } = useSelectContext();

  return (
    <div
      className={`
        w-full flex items-center justify-between p-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer
        ${!selectedOption && "text-gray-500"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onToggleDropdown();
      }}
      data-testid="select-toggle"
    >
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

export default SelectInput;
