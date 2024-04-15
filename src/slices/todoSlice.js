import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: [],
    isVisible: false,
    isTaskVisible: false,
    currentId: 0
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setVisible: (state) => {
          state.isVisible = !state.isVisible
        },
        setTaskVisible: (state) => {
            state.isTaskVisible = !state.isTaskVisible
          },
        addProject: (state, action) => {
            state.projects.push(action.payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
        },
        getAllProjects: (state, action) => {
            state.projects = action.payload
        },
        addTask: (state, action) => {

        }
    }
})

export const { addProject, setVisible, getAllProjects, setTaskVisible } = todosSlice.actions;

export const getProjects = state => state.todos.projects
export const isVisible = state => state.todos.isVisible
export const isTaskVisible = state => state.todos.isTaskVisible

export default todosSlice.reducer;