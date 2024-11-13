import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StatusPage } from "./statuspage/StatusPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StatusPage />} />
        {/* add Dashboard */}
      </Routes>
    </BrowserRouter>
  );
};
