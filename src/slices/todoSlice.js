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
        },

        deleteTask: (state, action) => {
            const { projectId, taskId } = action.payload
            const getProject = state.projects.find(project => project.id === projectId)
            if (getProject) {
                getProject.todos = getProject.todos.filter(todo => todo.id !== taskId)
            }
            state.projects = state.projects.filter(project => project.id !== projectId);
            state.projects.push(getProject)
            localStorage.setItem('projects', JSON.stringify(state.projects));
        },

        completedTask: (state, action) => {
            const { projectId, taskId } = action.payload
            const getProject = state.projects.find(project => project.id === projectId)
            if (getProject) {
                const getTodo = getProject.todos.find(todo => todo.id === taskId)
                getTodo.done = !getTodo.done
                getProject.todos = getProject.todos.filter(todo => todo.id !== taskId)
                getProject.todos.push(getTodo) 
            }
            state.projects = state.projects.filter(project => project.id !== projectId);
            state.projects.push(getProject)
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
    deleteTask,
    completedTask,
} = todosSlice.actions;

export const getProjects = state => state.todos.projects
export const isVisible = state => state.todos.isVisible
export const isTaskVisible = state => state.todos.isTaskVisible

export default todosSlice.reducer;