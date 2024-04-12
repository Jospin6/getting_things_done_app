import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
    isVisible: false,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setVisible: (state) => {
          state.isVisible = !state.isVisible
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
        },
        getAllProjects: (state, action) => {
            state.projects = action.payload
        }
    }
})

export const { addProject, setVisible, getAllProjects } = todosSlice.actions;

export const getProjects = state => state.todos.projects
export const isVisible = state => state.todos.isVisible

export default todosSlice.reducer;