import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, ValidFilters } from './filter.actions';

export const initialState: ValidFilters = 'all';

export const filterReducer = createReducer<ValidFilters, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter),
);