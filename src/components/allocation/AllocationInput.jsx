import { useState } from 'react';
import { useTableContext } from '../../context/TableContext';
import { Button, Input } from '../ui';
import { Calculator, Edit } from 'lucide-react';

const AllocationInput = ({ rowId }) => {
  const { updateRowValue } = useTableContext();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handlePercentageClick = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setError('Please enter a valid number');
      return;
    }
    setError('');
    updateRowValue(rowId, value, true);
    setInputValue('');
  };

  const handleValueClick = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value < 0) {
      setError('Please enter a valid positive number');
      return;
    }
    setError('');
    updateRowValue(rowId, value, false);
    setInputValue('');
  };

  return (
    <div className="flex items-center gap-2 min-w-[320px]">
      <Input
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setError('');
        }}
        placeholder="Enter value"
        error={!!error}
        className="w-24"
      />
      <Button
        variant="primary"
        onClick={handlePercentageClick}
        disabled={!inputValue.trim()}
        icon={Calculator}
      >
        Allocation %
      </Button>
      <Button
        variant="secondary"
        onClick={handleValueClick}
        disabled={!inputValue.trim()}
        icon={Edit}
      >
        Allocation Val
      </Button>
      {error && <span className="text-red-500 text-xs ml-2 dark:text-red-400">{error}</span>}
    </div>
  );
};

export default AllocationInput;