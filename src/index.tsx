import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<p className="p-2">Loading...</p>}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);
