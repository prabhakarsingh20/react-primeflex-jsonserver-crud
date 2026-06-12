import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import AddEditUserList from "./pages/AddEditUserList";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useRef } from "react";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

function App() {
  const toast = useRef(null);
  return (
    <BrowserRouter>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UsersList toast={toast} />} />
          <Route path="/add" element={<AddEditUserList toast={toast} />} />
          <Route path="/edit/:id" element={<AddEditUserList toast={toast} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
