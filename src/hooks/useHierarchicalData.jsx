import { useState, useMemo } from 'react';

const useHierarchicalData = (initialData) => {
  const [data, setData] = useState(() => {
    const addOriginalValues = (rows) => rows.map(row => ({
      ...row,
      originalValue: row.value,
      children: row.children ? addOriginalValues(row.children) : undefined
    }));
    return addOriginalValues(initialData.rows);
  });

  const [expandedRows, setExpandedRows] = useState(new Set(['electronics', 'furniture']));

  const calculateSubtotals = (rows) => rows.map(row => {
    if (row.children && row.children.length > 0) {
      const updatedChildren = calculateSubtotals(row.children);
      const subtotal = updatedChildren.reduce((sum, child) => sum + child.value, 0);
      return { ...row, children: updatedChildren, value: subtotal };
    }
    return row;
  });

  const updateRowValue = (rowId, newValue, isPercentage = false) => {
    setData(prevData => {
      const updateRow = (rows, targetId, value, isPercent) => rows.map(row => {
        if (row.id === targetId) {
          let updatedValue = isPercent ? row.value + (row.value * value / 100) : value;

          if (row.children && row.children.length > 0) {
            const currentTotal = row.children.reduce((sum, child) => sum + child.value, 0);
            if (currentTotal > 0) {
              const updatedChildren = row.children.map(child => ({
                ...child,
                value: parseFloat(((child.value / currentTotal) * updatedValue).toFixed(4))
              }));
              return { ...row, value: updatedValue, children: updatedChildren };
            }
          }
          return { ...row, value: parseFloat(updatedValue.toFixed(2)) };
        }
        if (row.children) {
          return { ...row, children: updateRow(row.children, targetId, value, isPercent) };
        }
        return row;
      });

      const updatedData = updateRow(prevData, rowId, newValue, isPercentage);
      return calculateSubtotals(updatedData);
    });
  };

  const toggleRowExpansion = (rowId) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      newSet.has(rowId) ? newSet.delete(rowId) : newSet.add(rowId);
      return newSet;
    });
  };

  const grandTotal = useMemo(() => data.reduce((sum, row) => sum + row.value, 0), [data]);
  const originalGrandTotal = useMemo(() => data.reduce((sum, row) => sum + row.originalValue, 0), [data]);

  return { data, expandedRows, updateRowValue, toggleRowExpansion, grandTotal, originalGrandTotal };
};

export default useHierarchicalData;