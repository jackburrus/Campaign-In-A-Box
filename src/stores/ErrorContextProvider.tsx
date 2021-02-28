import React, { createContext, useState } from "react";

import { func } from "../constants";

interface Context {
  error?: Error;
  setError: (error?: Error) => void;
}

export const ErrorContext = createContext<Context>({
  error: undefined,
  setError: func.noop,
});

export function ErrorContextProvider({
  children,
}: {
  children: JSX.Element;
}): React.ReactElement {
  const [error, setError] = useState<Error | undefined>(undefined);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}
