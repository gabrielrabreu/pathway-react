import { createContext, useContext } from "react";

export type Option = {
  value: string;
  label: string;
  testId?: string;
};

interface MultiselectContext {
  selectedOptions: Option[];
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onSelectOption: (option: Option) => void;
  onRemoveOption: (option: Option) => void;
}

export const MultiselectContext = createContext<MultiselectContext | undefined>(
  undefined
);

export const useMultiselectContext = () => {
  const context = useContext(MultiselectContext);

  if (!context) {
    throw new Error(
      "useMultiselectContext should be used within the scope of a Multiselect component"
    );
  }

  return context;
};

export default useMultiselectContext;
