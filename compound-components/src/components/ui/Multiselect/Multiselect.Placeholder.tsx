import React from "react";

import useMultiselectContext from "./Multiselect.Context";

interface MultiselectPlaceholderProps {
  text: string;
}

export interface MultiselectPlaceholderComponent
  extends React.FC<MultiselectPlaceholderProps> {}

const MultiselectPlaceholder: MultiselectPlaceholderComponent = ({ text }) => {
  const { selectedOptions, onRemoveOption } = useMultiselectContext();

  const maxVisibleBadges = 3;
  const additionalOptionsCount = selectedOptions.length - maxVisibleBadges;

  return (
    <div className="flex-grow flex flex-wrap items-center gap-2">
      {selectedOptions.slice(0, maxVisibleBadges).map((option, index) => (
        <div key={index} className="max-w-[4rem]">
          <span
            className="bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded flex items-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveOption(option);
            }}
          >
            <span
              className="truncate"
              title={option.label}
              data-testid={option.testId && `${option.testId}-label`}
            >
              {option.label}
            </span>
            <span
              className="ml-1 text-xs"
              data-testid={option.testId && `${option.testId}-remove`}
            >
              ✕
            </span>
          </span>
        </div>
      ))}
      {additionalOptionsCount > 0 && (
        <span
          className="bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded"
          data-testid="multiselect-additional"
        >
          +{additionalOptionsCount}
        </span>
      )}
      {selectedOptions.length === 0 && (
        <span className="text-gray-500" data-testid="multiselect-placeholder">
          {text}
        </span>
      )}
    </div>
  );
};

export default MultiselectPlaceholder;
