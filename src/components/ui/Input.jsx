const Input = ({ 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error = false,
  className = '',
  onKeyDown
}) => {
  const isNumber = type === 'number';

  const inputClass = `
    px-3 py-1.5 border rounded text-sm 
    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors
    dark:bg-gray-800 dark:text-white dark:border-gray-700
    ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
    ${isNumber ? 'appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' : ''}
    ${className}
  `;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={inputClass}
    />
  );
};

export default Input;