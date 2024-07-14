import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  tasks: TasksAmounts;
  importantTasks: TasksAmounts;
  checkedTasks: TasksAmounts;
};
type TasksAmounts = [
  {
    id: number;
    taskName: string;
    taskDate: string;
    isImportant: string;
    done: boolean;
  }
];

const initialState: InitialState = {
  tasks: [],
  importantTasks: [],
  checkedTasks: [],
};

const tasksInfoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: crypto.randomUUID(),
        taskName: action.payload.taskName,
        taskDate: action.payload.taskDate,
        isImportant: action.payload.isImportant,
        done: false,
      };
      state.tasks.push(task);
      if (action.payload.isImportant === "yes") {
        state.importantTasks.push(task);
      }
    },

    removeTask: (state, action) => {
      const temp = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = temp;
    },

    addToImportant: (state, action) => {
      const task = state.tasks[action.payload];
      const importantTaskIndex = state.importantTasks.findIndex(
        (item) => item.id === task.id
      );
      if (importantTaskIndex === -1) {
        task.isImportant = "yes";
        state.importantTasks.push(task);
        if (task.done === true) {
          const checkedTasks = state.checkedTasks[action.payload];
          checkedTasks.isImportant = "yes";
        }
      } else {
        task.isImportant = "no";
        const temp = state.importantTasks.filter((item) => item.id !== task.id);
        state.importantTasks = temp;
        if (task.done === true) {
          const checkedTasks = state.checkedTasks[action.payload];
          checkedTasks.isImportant = "no";
        }
      }
    },

    checkTask: (state, action) => {
      const task = state.tasks[action.payload];
      const checkedTaskIndex = state.checkedTasks.findIndex(
        (item) => item.id === task.id
      );
      if (checkedTaskIndex === -1) {
        task.done = true;
        state.checkedTasks.push(task);
        if (task.isImportant === "yes") {
          const importantTask = state.importantTasks[action.payload];
          importantTask.done = true;
        }
      } else {
        task.done = false;
        const temp = state.checkedTasks.filter((item) => item.id !== task.id);
        state.checkedTasks = temp;
        if (task.isImportant === "yes") {
          const importantTask = state.importantTasks[action.payload];
          importantTask.done = false;
        }
      }
    },
  },
});

export const { addTask, removeTask, addToImportant, checkTask } =
  tasksInfoSlice.actions;
  
export default tasksInfoSlice.reducer;
