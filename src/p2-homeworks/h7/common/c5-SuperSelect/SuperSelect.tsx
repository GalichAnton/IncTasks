import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
  value: string;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  value,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select onChange={onChangeCallback} value={value} {...restProps}>
      {options?.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
};

export default SuperSelect;
