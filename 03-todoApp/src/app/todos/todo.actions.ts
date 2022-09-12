import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create Todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()
);

export const edited = createAction(
    '[TODO] Edited Todo',
    props<{ id: number, text: string }>()
);

export const deleted = createAction(
    '[TODO] Deleted Todo',
    props<{ id: number }>()
);

export const toggleAll = createAction(
    '[TODO] ToggleAll Todo',
    props<{ completed: boolean }>()
);

export const clearCompleted = createAction(
    '[TODO] ClearCompleted Todo',
);