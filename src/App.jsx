import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterConnection from "./router/RouterConnection";
import Dashboard from "./pages/private/Dashboard";
import {
  BasePathUrl,
  ClientDetailsPathUrl,
  ClientsListPathUrl,
  LoginPathUrl,
  ReportsPathUrl,
  SignaturePathUrl,
  WorkDataPathUrl,
  WorkPagePathUrl,
} from "./services/UrlPaths";
import LoginPage from "./pages/public/LoginPage";
import ClientsList from "./pages/private/ClientsList";
import ClientDetails from "./pages/private/ClientDetails";
import WorkPage from "./pages/private/WorkPage";
import WorkDataPage from "./pages/private/WorkDataPage";
import SignaturePage from "./pages/private/SignaturePage";
import Reports from "./pages/private/Reports";
import NotFound from "./pages/public/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path={BasePathUrl + LoginPathUrl} element={<LoginPage />} />
        <Route path={BasePathUrl} element={<RouterConnection />}>
          <Route index element={<Dashboard />} />
          <Route path={ClientsListPathUrl} element={<ClientsList />} />
          <Route path={ClientDetailsPathUrl} element={<ClientDetails />} />
          <Route path={WorkPagePathUrl} element={<WorkPage />} />
          <Route path={WorkDataPathUrl} element={<WorkDataPage />} />
          <Route path={SignaturePathUrl} element={<SignaturePage />} />
          <Route path={ReportsPathUrl} element={<Reports />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
