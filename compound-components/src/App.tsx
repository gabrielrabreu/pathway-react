import React, { PropsWithChildren, useEffect, useState } from "react";

import { countries as dummyCountries } from "@/api/data/countries/countries";
import Select from "@/components/ui/Select/Select";
import Multiselect from "@/components/ui/Multiselect/Multiselect";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { Country } from "@/types/Country";

interface SectionProps extends PropsWithChildren {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ children, title, description }) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-2">
        <React.Fragment>{children}</React.Fragment>
      </div>
    </section>
  );
};

const SelectSection: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredContries] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(dummyCountries);
  }, []);

  const filterCountries = (query: string): void => {
    const filtered = countries.filter((p) =>
      p.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredContries(filtered);
  };

  return (
    <Section
      title="Select"
      description="This is an example of the select component"
    >
      <Select onChange={(option) => console.log(option)}>
        <Select.Input>
          <Select.Placeholder text="Select.."></Select.Placeholder>
          <Select.Indicator></Select.Indicator>
        </Select.Input>
        <Select.Dropdown>
          <Select.Filter
            placeholder="Search.."
            onQueryChange={filterCountries}
          ></Select.Filter>
          {filteredCountries.map((country, index) => (
            <Select.Option
              key={index}
              label={country.name}
              value={country.code}
            >
              {country.name}
            </Select.Option>
          ))}
        </Select.Dropdown>
      </Select>
    </Section>
  );
};

const MultiselectSection: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredContries] = useState<Country[]>([]);

  useEffect(() => {
    setCountries(dummyCountries);
  }, []);

  const filterCountries = (query: string): void => {
    const filtered = countries.filter((p) =>
      p.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setFilteredContries(filtered);
  };

  return (
    <Section
      title="Multiselect"
      description="This is an example of the multiselect component"
    >
      <Multiselect onChange={(option) => console.log(option)}>
        <Multiselect.Input>
          <Multiselect.Placeholder text="Select.."></Multiselect.Placeholder>
          <Multiselect.Indicator></Multiselect.Indicator>
        </Multiselect.Input>
        <Multiselect.Dropdown>
          <Multiselect.Filter
            placeholder="Search.."
            onQueryChange={filterCountries}
          ></Multiselect.Filter>
          {filteredCountries.map((country, index) => (
            <Multiselect.Option
              key={index}
              label={country.name}
              value={country.code}
            >
              {country.name}
            </Multiselect.Option>
          ))}
        </Multiselect.Dropdown>
      </Multiselect>
    </Section>
  );
};

const TooltipSection: React.FC = () => {
  return (
    <Section
      title="Tooltip"
      description="This is an example of the tooltip component"
    >
      <Tooltip>
        <Tooltip.Trigger>
          <button>Hover me</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <span>Content...</span>
        </Tooltip.Content>
      </Tooltip>
    </Section>
  );
};

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Components Demonstration Page</h1>

      <hr className="mt-5" />
      <SelectSection />

      <hr className="mt-5" />
      <TooltipSection />

      <hr className="mt-5" />
      <MultiselectSection />
    </div>
  );
};

export default App;
