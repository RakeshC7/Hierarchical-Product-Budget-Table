export const calculateVariance = (currentValue, originalValue) => {
  if (originalValue === 0) return 0;
  return ((currentValue - originalValue) / originalValue) * 100;
};

export const formatNumber = (num) => parseFloat(num.toFixed(2));

export const findOriginalValue = (data, rowId) => {
  const findInRows = (rows) => {
    for (const row of rows) {
      if (row.id === rowId) return row.originalValue;
      if (row.children) {
        const found = findInRows(row.children);
        if (found !== undefined) return found;
      }
    }
    return undefined;
  };
  return findInRows(data) || 0;
};