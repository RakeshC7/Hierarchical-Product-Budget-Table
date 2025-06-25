import { Card } from '../ui';
import { useTableContext } from '../../context/TableContext';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import {TableRow} from './TableRow';

export const HierarchicalTable = () => {
  const { data, grandTotal, originalGrandTotal } = useTableContext();

  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader />
          <tbody className="dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {data.map(row => (
              <TableRow key={row.id} row={row} />
            ))}
          </tbody>
          <TableFooter grandTotal={grandTotal} originalGrandTotal={originalGrandTotal} />
        </table>
      </div>
    </Card>
  );
};