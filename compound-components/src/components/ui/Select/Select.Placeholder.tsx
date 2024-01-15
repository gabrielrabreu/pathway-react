import React from "react";

import useSelectContext from "./Select.Context";

interface SelectPlaceholderProps {
  text: string;
}

export interface SelectPlaceholderComponent
  extends React.FC<SelectPlaceholderProps> {}

const SelectPlaceholder: SelectPlaceholderComponent = ({ text }) => {
  const { selectedOption, onRemoveOption } = useSelectContext();

  return (
    <div className="max-w-[15rem]">
      {selectedOption ? (
        <span
          className="max-w-full bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded flex items-center cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onRemoveOption();
          }}
        >
          <span
            className="truncate"
            title={selectedOption.label}
            data-testid="select-label"
          >
            {selectedOption.label}
          </span>
          <span className="ml-1 text-xs" data-testid="select-remove">
            ✕
          </span>
        </span>
      ) : (
        <span className="text-gray-500" data-testid="select-placeholder">
          {text}
        </span>
      )}
    </div>
  );
};

export default SelectPlaceholder;
