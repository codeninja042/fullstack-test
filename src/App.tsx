import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import {RouterProvider} from "react-router-dom";
import {
  QueryClient,
  QueryErrorResetBoundary,
  QueryClientProvider,
} from "@tanstack/react-query";
import {ErrorBoundary} from "react-error-boundary";
import {Button} from "@mui/material";
import {router} from "./routes";
import theme from "./theme";

const queryClient = new QueryClient();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({reset}) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({resetErrorBoundary}) => (
                <div>
                  There was an error!
                  <Button
                    onClick={() => {
                      resetErrorBoundary();
                    }}>
                    Try again
                  </Button>
                </div>
              )}>
              <RouterProvider router={router} />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </ThemeProvider>
  );
};
export default App;
