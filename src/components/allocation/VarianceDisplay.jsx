import { Badge } from '../ui';
import { calculateVariance, formatNumber } from '../../utils/calculations';

const VarianceDisplay = ({ currentValue, originalValue }) => {
  const variance = calculateVariance(currentValue, originalValue);
  const isPositive = variance > 0;
  const isNegative = variance < 0;

  const getVariant = () => {
    if (isPositive) return 'success';
    if (isNegative) return 'danger';
    return 'default';
  };

  return (
    <Badge variant={getVariant()}>
      {variance > 0 ? '+' : ''}{formatNumber(variance)}%
    </Badge>
  );
};

export default VarianceDisplay;