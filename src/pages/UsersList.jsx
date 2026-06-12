//state variable create here
import { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

export default function UsersList({ toast }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await api.get("/users");
    console.log(res);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this user?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await api.delete(`/users/${id}`);

        toast.current.show({
          severity: "success",
          summary: "Deleted",
          detail: "User Deleted Successfully",
          life: 2000,
        });
        fetchUsers();
      },
    });
  };

  const actionTemplate = (rowData) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-sm p-button-danger mr-2"
        onClick={() => deleteUser(rowData.id)}
      />
    </>
  );
  return (
    <div className="">
      <div className="flex justify-content-between align-items-center">
        <h2>Users List</h2>
        <Button
          label="Add User"
          icon="pi pi-plus-circle"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>

      <DataTable
        value={users}
        showGridlines
        stripedRows
        paginator
        rows={5}
        size="small"
        filterDisplay="row"
        tableStyle={{ minWidth: "40rem" }}
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search By Name"
          sortable
        ></Column>

        <Column
          field="username"
          header="User Name"
          filter
          filterPlaceholder="Search By UserName"
          sortable
        ></Column>

        <Column
          field="email"
          header="Emal"
          filter
          filterPlaceholder="Search By Email"
          sortable
        ></Column>

        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search By Age"
          sortable
        ></Column>

        <Column
          header="Action"
          body={actionTemplate}
          style={{ width: "13%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
