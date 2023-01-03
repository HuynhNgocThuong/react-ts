import { ReactNode, createContext } from 'react';

interface ProgressContextProviderProps {
  children: ReactNode;
}
interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

const progressDefault: ProgressContextDefault = {
  lastTime: '1/1/2021',
  status: 'In Progress',
};

export const ProgressContext =
  createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
