interface OptionProps {
  option: string;
}

const Option = ({option}: OptionProps) => {
  return (
        <button>{option}</button>
  );
};

export default Option;
