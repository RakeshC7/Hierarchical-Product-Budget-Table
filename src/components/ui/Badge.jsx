const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-white',
    danger: 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-white',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-white'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;

// Light Variant
// const variants = {
//     default: 'bg-gray-100 text-gray-800',
//     success: 'bg-green-100 text-green-800',
//     danger: 'bg-red-100 text-red-800',
//     warning: 'bg-yellow-100 text-yellow-800'
//   };