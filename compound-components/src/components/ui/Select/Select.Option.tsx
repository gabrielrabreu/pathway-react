import React, { PropsWithChildren } from "react";

import { PropsWithTestId } from "@/types/PropsWithTestId";

import useSelectContext from "./Select.Context";

interface SelectOptionProps extends PropsWithChildren, PropsWithTestId {
  value: string;
  label: string;
}

export interface SelectOptionComponent extends React.FC<SelectOptionProps> {}

const SelectOption: SelectOptionComponent = ({
  children,
  "data-testid": testId,
  value,
  label,
}) => {
  const { selectedOption, onSelectOption } = useSelectContext();

  const isActive = selectedOption?.value === value;

  return (
    <li
      className={`
        p-2 hover:bg-sky-600 hover:text-white truncate
        ${isActive ? "bg-sky-600 text-white" : "bg-white"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onSelectOption({ value, label });
      }}
      data-testid={testId}
    >
      <React.Fragment>{children}</React.Fragment>
    </li>
  );
};

export default SelectOption;
