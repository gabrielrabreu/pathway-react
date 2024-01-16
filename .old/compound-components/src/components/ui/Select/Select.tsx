import React, { PropsWithChildren, useRef, useState } from "react";

import { useOutsideClick } from "@/utils/hooks";

import { Option, SelectContext } from "./Select.Context";
import SelectInput, { SelectInputComponent } from "./Select.Input";
import SelectPlaceholder, {
  SelectPlaceholderComponent,
} from "./Select.Placeholder";
import SelectIndicator, { SelectIndicatorComponent } from "./Select.Indicator";
import SelectDropdown, { SelectDropdownComponent } from "./Select.Dropdown";
import SelectFilter, { SelectFilterComponent } from "./Select.Filter";
import SelectOption, { SelectOptionComponent } from "./Select.Option";

interface SelectProps extends PropsWithChildren {
  onChange: (value: string | undefined) => void;
}

interface SelectComponent extends React.FC<SelectProps> {
  Input: SelectInputComponent;
  Placeholder: SelectPlaceholderComponent;
  Indicator: SelectIndicatorComponent;
  Dropdown: SelectDropdownComponent;
  Filter: SelectFilterComponent;
  Option: SelectOptionComponent;
}

const Select: SelectComponent = ({ children, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    undefined
  );
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);
  useOutsideClick(divRef, () => setDropdownOpen(false));

  const onToggleDropdown = () => setDropdownOpen((curr) => !curr);

  const onSelectOption = (option: Option): void => {
    if (selectedOption?.value == option.value) {
      setSelectedOption(undefined);
      onChange(undefined);
    } else {
      setSelectedOption(option);
      onChange(option.value);
    }
  };

  const onRemoveOption = (): void => {
    setSelectedOption(undefined);
    onChange(undefined);
  };

  return (
    <SelectContext.Provider
      value={{
        selectedOption,
        isDropdownOpen,
        onToggleDropdown,
        onSelectOption,
        onRemoveOption,
      }}
    >
      <div
        className="w-full max-w-xs relative"
        ref={divRef}
        data-testid="select-container"
      >
        <React.Fragment>{children}</React.Fragment>
      </div>
    </SelectContext.Provider>
  );
};

Select.Input = SelectInput;
Select.Placeholder = SelectPlaceholder;
Select.Indicator = SelectIndicator;
Select.Dropdown = SelectDropdown;
Select.Filter = SelectFilter;
Select.Option = SelectOption;

export default Select;
