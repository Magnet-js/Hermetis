import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router.tsx";
import { QueryAPIClientProvider } from "./context/QueryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryAPIClientProvider>
      <Router />
    </QueryAPIClientProvider>
  </StrictMode>
);
