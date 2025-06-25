import React from 'react';
import { Button } from '../ui';
import { AllocationInput, VarianceDisplay } from '../allocation';
import { useTableContext } from '../../context/TableContext';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { formatNumber, findOriginalValue } from '../../utils/calculations';

export const TableRow = ({ row, level = 0 }) => {
  
  const { expandedRows, toggleRowExpansion, data } = useTableContext();

  const hasChildren = row.children && row.children.length > 0;
  const isExpanded = expandedRows.has(row.id);
  const originalValue = findOriginalValue(data, row.id);

  return (
    <>
      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <td className="px-6 py-4">
          <div className="flex items-center" style={{ paddingLeft: `${level * 20}px` }}>
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleRowExpansion(row.id)}
                className="mr-2 w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 !p-0"
              >
                {isExpanded ? <ChevronDown size={16} color="#9ca3af" /> : <ChevronRight size={16} color="#9ca3af" />}
              </Button>
            )}
            <span className={`${level > 0 ? 'text-gray-400 dark:text-gray-300' : 'font-semibold text-gray-900 dark:text-white'}`}>
              {level > 0 && '-- '}
              {row.label}
            </span>
          </div>
        </td>
        <td className="px-6 py-4">
          <span className="font-mono text-gray-900 dark:text-white font-medium">
            {formatNumber(row.value).toLocaleString()}
          </span>
        </td>
        <td className="px-6 py-4">
          <AllocationInput rowId={row.id} />
        </td>
        <td className="px-6 py-4">
          <VarianceDisplay currentValue={row.value} originalValue={originalValue} />
        </td>
      </tr>
      {hasChildren && isExpanded && row.children.map(child => (
        <TableRow key={child.id} row={child} level={level + 1} />
      ))}
    </>
  );
};
