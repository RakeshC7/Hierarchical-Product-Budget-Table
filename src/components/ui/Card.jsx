const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export default Card;