// import Dropdown from "@/components/dropdown/Dropdown";


import Dropdown from "../components/dropdown/Dropdown";
import { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Demo Component
const DropdownDemo = () => {
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('react');
  const [value3, setValue3] = useState<string>('');

  const fruitOptions: DropdownOption[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'grape', label: 'Grape' },
    { value: 'mango', label: 'Mango', disabled: true },
  ];

  const techOptions: DropdownOption[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];

  const countryOptions: DropdownOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dropdown Component</h1>
         
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Usage</h2>
            <Dropdown
              options={fruitOptions}
              value={value1}
              onChange={setValue1}
              placeholder="Select a fruit"
              label="Favorite Fruit"
            />
            {value1 && <p className="mt-2 text-sm text-gray-600">Selected: {value1}</p>}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">With Default Value</h2>
            <Dropdown
              options={techOptions}
              value={value2}
              onChange={setValue2}
              label="Technology"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
            <div className="space-y-4">
              <Dropdown
                options={countryOptions}
                size="sm"
                placeholder="Small size"
                label="Small"
              />
              <Dropdown
                options={countryOptions}
                size="md"
                placeholder="Medium size (default)"
                label="Medium"
              />
              <Dropdown
                options={countryOptions}
                size="lg"
                placeholder="Large size"
                label="Large"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">States</h2>
            <div className="space-y-4">
              <Dropdown
                options={fruitOptions}
                value={value3}
                onChange={setValue3}
                error="Please select a fruit"
                label="With Error"
              />
              <Dropdown
                options={fruitOptions}
                disabled
                label="Disabled"
              />
              <Dropdown
                options={fruitOptions}
                fullWidth
                label="Full Width"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDemo;