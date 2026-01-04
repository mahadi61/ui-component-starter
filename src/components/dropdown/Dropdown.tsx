import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error,
  label,
  size = 'md',
  fullWidth = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelect = (optionValue: string) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    onChange?.(optionValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setIsOpen(false);
        }
        break;
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : 'w-64'}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={`
            ${sizeClasses[size]}
            ${fullWidth ? 'w-full' : 'w-64'}
            flex items-center justify-between
            bg-white border rounded-lg
            transition-all duration-200
            ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'cursor-pointer hover:border-gray-400'}
            ${error ? 'border-red-500' : isOpen ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}
            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
          `}
        >
          <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown 
            className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20}
          />
        </button>

        {isOpen && (
          <div 
            className={`
              absolute z-50 mt-1 ${fullWidth ? 'w-full' : 'w-64'}
              bg-white border border-gray-300 rounded-lg shadow-lg
              max-h-60 overflow-auto
            `}
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => !option.disabled && handleSelect(option.value)}
                disabled={option.disabled}
                role="option"
                aria-selected={selectedValue === option.value}
                className={`
                  w-full px-4 py-2 text-left flex items-center justify-between
                  transition-colors duration-150
                  ${option.disabled 
                    ? 'cursor-not-allowed opacity-50 bg-gray-50' 
                    : 'cursor-pointer hover:bg-blue-50'
                  }
                  ${selectedValue === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
                `}
              >
                <span>{option.label}</span>
                {selectedValue === option.value && (
                  <Check size={16} className="text-blue-700" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Dropdown;