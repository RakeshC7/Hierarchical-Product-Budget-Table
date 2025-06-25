const TableHeader = () => {
  const headers = [
    { label: 'Label', className: 'text-left' },
    { label: 'Value', className: 'text-left' },
    { label: 'Allocation Controls', className: 'text-left' },
    { label: 'Variance %', className: 'text-left' }
  ];

  return (
    <thead className="bg-gray-50 dark:bg-gray-700">
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            className={`px-6 py-3 text-xs font-medium text-gray-500 dark:text-blue-300 uppercase tracking-wider ${header.className}`}
          >
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;