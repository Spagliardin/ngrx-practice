import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { clearCompleted, create, deleted, edited, toggle, toggleAll } from './todo.actions';

export const initialState:Todo[] = [
  new Todo('I want student')
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo( text )]),

  on(clearCompleted, (state) => state.filter(todo => !todo.completed)),

  on(deleted, (state, { id } ) => state.filter( todo => {
    return todo.id !== id
  })),

  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    })
  }),

  on(toggleAll, (state, { completed }) => {
    return state.map( todo => {
      return {
        ...todo,
        completed: completed
      }
    })
  }),

  on(edited, (state, { id, text }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      } else {
        return todo
      }
    })
  }),
);