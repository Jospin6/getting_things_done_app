import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: JSON.parse(localStorage.getItem('projects')) || [],
    isVisible: false,
    isTaskVisible: false,
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
        addTask: (state, action) => {
            state.projects = state.projects.forEach(project => {
                if (project.id === state.currentId) {
                    project.todos.unshift(action.payload)
                }
            });
            localStorage.setItem('projects', JSON.stringify(state.projects));
        }
    }
})

export const { 
    addProject,
    addTask,
    setVisible, 
    setTaskVisible, 
} = todosSlice.actions;

export const getProjects = state => state.todos.projects
export const isVisible = state => state.todos.isVisible
export const isTaskVisible = state => state.todos.isTaskVisible

export default todosSlice.reducer;