import { formatNumber } from '../../utils/calculations';
import VarianceDisplay from '../allocation/VarianceDisplay';

const TableFooter = ({ grandTotal, originalGrandTotal }) => {
  return (
    <tfoot className="bg-gray-100 dark:bg-gray-800 border-t-2 border-gray-300 dark:border-gray-600">
      <tr>
        <td className="px-6 py-4 font-bold text-lg text-gray-900 dark:text-white">
          <div className="flex items-center text-gray-900 dark:text-gray-100">
            Grand Total
          </div>
        </td>
        <td className="px-6 py-4 font-bold text-lg font-mono text-gray-900 dark:text-white">
          {formatNumber(grandTotal).toLocaleString()}
        </td>
        <td className="px-6 py-4"></td>
        <td className="px-6 py-4">
          <VarianceDisplay currentValue={grandTotal} originalValue={originalGrandTotal} />
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;