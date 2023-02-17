import { createContext, useCallback, useState } from "react";

export interface ILoadingContext {
  loading: boolean;
  toggleLoading: () => void;
}

export const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  toggleLoading: () => {},
});

interface ILoadingComponent {
  children: React.ReactNode;
}

export const LoadingContextProvider: React.FC<ILoadingComponent> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = useCallback(() => {
    setLoading((oldValue) => !oldValue);
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, toggleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
