import { createContext, useContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';

const initialState: TaskStateModel = {
  tasks: [],
  secondRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  homeState: TaskStateModel;
  homeSetState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  homeState: initialState,
  homeSetState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  return (
    <TaskContext.Provider value={initialContextValue}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
