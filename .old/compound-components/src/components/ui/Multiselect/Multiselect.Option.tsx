import React, { PropsWithChildren } from "react";

import { PropsWithTestId } from "@/types/PropsWithTestId";

import useMultiselectContext from "./Multiselect.Context";

interface MultiselectOptionProps extends PropsWithChildren, PropsWithTestId {
  value: string;
  label: string;
}

export interface MultiselectOptionComponent
  extends React.FC<MultiselectOptionProps> {}

const MultiselectOption: MultiselectOptionComponent = ({
  children,
  "data-testid": testId,
  value,
  label,
}) => {
  const { selectedOptions, onSelectOption } = useMultiselectContext();

  const isActive = selectedOptions.some((o) => o.value === value);

  return (
    <li
      className={`
        p-2 hover:bg-sky-600 hover:text-white truncate
        ${isActive ? "bg-sky-600 text-white" : "bg-white"}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onSelectOption({ value, label, testId });
      }}
      data-testid={testId}
    >
      <React.Fragment>{children}</React.Fragment>
    </li>
  );
};

export default MultiselectOption;
