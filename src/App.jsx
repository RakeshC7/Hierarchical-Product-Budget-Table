import React from 'react';
import { TableContext } from './context/TableContext';
import useHierarchicalData from './hooks/useHierarchicalData';
import { HierarchicalTable } from './components/table';

const App = () => {
  const initialData = {
    rows: [
      {
        id: 'electronics',
        label: 'Electronics',
        value: 1500,
        children: [
          { id: 'phones', label: 'Phones', value: 800 },
          { id: 'laptops', label: 'Laptops', value: 700 }
        ]
      },
      {
        id: 'furniture',
        label: 'Furniture',
        value: 1000,
        children: [
          { id: 'tables', label: 'Tables', value: 300 },
          { id: 'chairs', label: 'Chairs', value: 700 }
        ]
      }
    ]
  };

  const tableData = useHierarchicalData(initialData);

  return (
    <TableContext.Provider value={tableData}>
      <div className="min-h-screen w-full bg-gray-900 text-white py-8">
        <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Hierarchical Table
            </h1>
          </div>
          <HierarchicalTable />
        </div>
      </div>
    </TableContext.Provider>
  );
};

export default App;