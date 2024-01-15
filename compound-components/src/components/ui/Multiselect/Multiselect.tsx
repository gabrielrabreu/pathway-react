import React, { PropsWithChildren, useRef, useState } from "react";

import { useOutsideClick } from "@/utils/hooks";

import MultiselectInput, {
  MultiselectInputComponent,
} from "./Multiselect.Input";
import MultiselectPlaceholder, {
  MultiselectPlaceholderComponent,
} from "./Multiselect.Placeholder";
import MultiselectIndicator, {
  MultiselectIndicatorComponent,
} from "./Multiselect.Indicator";
import MultiselectDropdown, {
  MultiselectDropdownComponent,
} from "./Multiselect.Dropdown";
import MultiselectFilter, {
  MultiselectFilterComponent,
} from "./Multiselect.Filter";
import MultiselectOption, {
  MultiselectOptionComponent,
} from "./Multiselect.Option";
import { MultiselectContext, Option } from "./Multiselect.Context";

interface MultiselectProps extends PropsWithChildren {
  onChange: (value: string[]) => void;
}

interface MultiselectComponent extends React.FC<MultiselectProps> {
  Input: MultiselectInputComponent;
  Placeholder: MultiselectPlaceholderComponent;
  Indicator: MultiselectIndicatorComponent;
  Dropdown: MultiselectDropdownComponent;
  Filter: MultiselectFilterComponent;
  Option: MultiselectOptionComponent;
}

const Multiselect: MultiselectComponent = ({ children, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);
  useOutsideClick(divRef, () => setDropdownOpen(false));

  const onToggleDropdown = () => setDropdownOpen((curr) => !curr);

  const onSelectOption = (option: Option): void => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.some((o) => o.value === option.value)) {
        const newOptions = prevOptions.filter((o) => o.value !== option.value);
        onChange(newOptions.map((option) => option.value));
        return newOptions;
      } else {
        const newOptions = [...prevOptions, option];
        onChange(newOptions.map((option) => option.value));
        return newOptions;
      }
    });
  };

  const onRemoveOption = (option: Option): void => {
    setSelectedOptions((prevOptions) => {
      const newOptions = prevOptions.filter((o) => o.value !== option.value);
      onChange(newOptions.map((option) => option.value));
      return newOptions;
    });
  };

  return (
    <MultiselectContext.Provider
      value={{
        selectedOptions,
        isDropdownOpen,
        onToggleDropdown,
        onSelectOption,
        onRemoveOption,
      }}
    >
      <div
        className="w-full max-w-xs relative"
        ref={divRef}
        data-testid="multiselect-container"
      >
        <React.Fragment>{children}</React.Fragment>
      </div>
    </MultiselectContext.Provider>
  );
};

Multiselect.Input = MultiselectInput;
Multiselect.Placeholder = MultiselectPlaceholder;
Multiselect.Indicator = MultiselectIndicator;
Multiselect.Dropdown = MultiselectDropdown;
Multiselect.Filter = MultiselectFilter;
Multiselect.Option = MultiselectOption;

export default Multiselect;
