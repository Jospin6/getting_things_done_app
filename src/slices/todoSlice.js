import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    projects: JSON.parse(localStorage.getItem('projects')) || [] ,
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
            const {projectId, todo} = action.payload
            const project = state.projects.find(project => project.id === projectId);
            if (project) {
                let todoId = project.todos.length + 1
                project.todos.push({id: todoId, ...todo});
                localStorage.setItem('projects', JSON.stringify(state.projects));
            }
        },
        deleteProject: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload);
            localStorage.setItem('projects', JSON.stringify(state.projects));
        }
    }
})

export const { 
    addProject,
    addTask,
    setVisible, 
    setTaskVisible,
    deleteProject,
} = todosSlice.actions;

export const getProjects = state => state.todos.projects
export const isVisible = state => state.todos.isVisible
export const isTaskVisible = state => state.todos.isTaskVisible

export default todosSlice.reducer;