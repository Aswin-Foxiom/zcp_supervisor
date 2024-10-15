import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterConnection from "./router/RouterConnection";
import Dashboard from "./pages/private/Dashboard";
import {
  BasePathUrl,
  CashCustomerUrl,
  ClientDetailsPathUrl,
  ClientsListPathUrl,
  LoginPathUrl,
  NotificationUrl,
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
import PrivateRoute from "./utils/PrivateRoute";
import CashCustomer from "./pages/private/CashCustomer";
import Notification from "./pages/private/Notification";
import ServiceReportForm from "./components/reports/ServiceReport";
import Invoice from "./components/invoice/Invoice";

function App() {
  return (
    <div>
      <Routes>
        <Route path={BasePathUrl + LoginPathUrl} element={<LoginPage />} />
        <Route
          path={BasePathUrl}
          element={
            <PrivateRoute>
              <RouterConnection />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path={ClientsListPathUrl} element={<ClientsList />} />
          <Route path={ClientDetailsPathUrl} element={<ClientDetails />} />
          <Route path={WorkPagePathUrl} element={<WorkPage />} />
          <Route path={WorkDataPathUrl} element={<WorkDataPage />} />
          <Route path={SignaturePathUrl} element={<SignaturePage />} />
          <Route path={ReportsPathUrl} element={<Reports />} />
          <Route path={CashCustomerUrl} element={<CashCustomer />} />
          <Route path={NotificationUrl} element={<Notification />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/report" element={<ServiceReportForm />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
}

export default App;
