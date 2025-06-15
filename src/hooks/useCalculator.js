import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getAllDiaryProduct,
  selectUserParams,
} from 'reduxState/services/selectors';
import { calculateCalories } from 'utils';

export const useCalculator = () => {
  const [consumed, setConsumed] = useState();
  const notes = useSelector(getAllDiaryProduct);
  const user = useSelector(selectUserParams);

  useEffect(() => {
    if (notes.length) {
      const total = notes.reduce((total, note) => {
        return (
          total + (note.product.calories / note.product.weight) * note.weight
        );
      }, 0);
      setConsumed(Math.round(total));
    } else {
      setConsumed(0);
    }
  }, [notes]);

  const dailyNorm = calculateCalories(user);
  const left = dailyNorm - consumed;
  const percent = Math.round((consumed / dailyNorm) * 100);
  return { dailyNorm, consumed, left, percent };
};
