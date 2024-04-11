import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
}

let nextProjectId = 1;
let nextTodoId = 1;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.projects.push({
              id: nextProjectId++,
              title: action.payload,
              todos: [],
            });
            localStorage.setItem('projects', JSON.stringify(state.projects));
          },
    }
})

export const { addProject } = todosSlice.actions;

export default todosSlice.reducer;