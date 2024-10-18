import filterSlice, { changeState, Filters } from '../src/services/slices/filterSlice';
import { FilterValuesType } from '../src/types/types';

describe('filterSlice', () => {
  let initialState: Filters;

  beforeEach(() => {
    initialState = {
      checked: 'All' as FilterValuesType,
    };
  });

  it('должен обрабатывать изменение состояния фильтра', () => {
    const action = changeState('Completed' as FilterValuesType);
    const state = filterSlice(initialState, action);

    expect(state.checked).toBe('Completed');
  });
});
