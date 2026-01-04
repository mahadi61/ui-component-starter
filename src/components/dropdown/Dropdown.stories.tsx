import type { Meta, StoryObj } from '@storybook/react';
// import { Dropdown } from './Dropdown';
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
];

const techOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid', disabled: true },
];

export const Default: Story = {
  args: {
    options: fruitOptions,
    placeholder: 'Select a fruit',
  },
};

export const WithLabel: Story = {
  args: {
    options: fruitOptions,
    label: 'Favorite Fruit',
    placeholder: 'Choose one',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: techOptions,
    value: 'react',
    label: 'Technology',
  },
};

export const WithError: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit Selection',
    error: 'Please select a fruit',
  },
};

export const Disabled: Story = {
  args: {
    options: fruitOptions,
    disabled: true,
    label: 'Disabled Dropdown',
  },
};

export const DisabledOptions: Story = {
  args: {
    options: techOptions,
    label: 'Some Options Disabled',
    placeholder: 'Select technology',
  },
};

export const Small: Story = {
  args: {
    options: fruitOptions,
    size: 'sm',
    label: 'Small Size',
  },
};

export const Medium: Story = {
  args: {
    options: fruitOptions,
    size: 'md',
    label: 'Medium Size (Default)',
  },
};

export const Large: Story = {
  args: {
    options: fruitOptions,
    size: 'lg',
    label: 'Large Size',
  },
};

export const FullWidth: Story = {
  args: {
    options: fruitOptions,
    fullWidth: true,
    label: 'Full Width Dropdown',
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
    })),
    label: 'Long List with Scroll',
  },
};