import { createAction, props } from "@ngrx/store";

export type ValidFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[filter] Set Filter',
    props<{filter: ValidFilters}>()
)