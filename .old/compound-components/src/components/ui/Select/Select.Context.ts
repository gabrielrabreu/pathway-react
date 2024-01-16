import { createContext, useContext } from "react";

export type Option = {
  value: string;
  label: string;
};

interface SelectContext {
  selectedOption: Option | undefined;
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onSelectOption: (option: Option) => void;
  onRemoveOption: () => void;
}

export const SelectContext = createContext<SelectContext | undefined>(
  undefined
);

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error(
      "useSelectContext should be used within the scope of a Select component"
    );
  }

  return context;
};

export default useSelectContext;
