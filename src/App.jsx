import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

import Login from "./pages/Login.jsx";
import OpenInspections from "./pages/OpenInspections.jsx";
import CompletedInspections from "./pages/CompletedInspections.jsx";
import Settings from "./pages/Settings.jsx";
import KnowledgeBase from "./pages/KnowledgeBase.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/open-inspections" replace />} />
        <Route path="open-inspections" element={<OpenInspections />} />
        <Route path="completed-inspections" element={<CompletedInspections />} />
        <Route path="settings" element={<Settings />} />
        <Route path="knowledge-base" element={<KnowledgeBase />} />
      </Route>

      <Route path="*" element={<Navigate to="/open-inspections" replace />} />
    </Routes>
  );
}

export default App;
