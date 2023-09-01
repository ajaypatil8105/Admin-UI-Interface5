import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function TableRowItem({
  row,
  selected,
  editing,
  editName,
  editEmail,
  editRole,
  handleRowSelected,
  handleEdit,
  handleSaveEdit,
  cancelEdit,
  handleDelete,
  handleEditNameChange,
  handleEditEmailChange,
  handleEditRoleChange,
}) {
  return (
    <TableRow
      key={row.id}
      style={{
        cursor: "pointer",
        backgroundColor: selected ? "#E2E5DE" : "white",
      }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={() => handleRowSelected(row)}
        />
      </TableCell>
      <TableCell>
        {editing ? (
          <input
            type="text"
            value={editName}
            onChange={(e) => handleEditNameChange(e.target.value)}
          />
        ) : (
          row.name
        )}
      </TableCell>
      <TableCell>
        {editing ? (
          <input
            type="text"
            value={editEmail}
            onChange={(e) => handleEditEmailChange(e.target.value)}
          />
        ) : (
          row.email
        )}
      </TableCell>
      <TableCell>
        {editing ? (
          <input
            type="text"
            value={editRole}
            onChange={(e) => handleEditRoleChange(e.target.value)}
          />
        ) : (
          row.role
        )}
      </TableCell>
      <TableCell>
        {editing ? (
          <>
            <button
              className={`action-button edit-button ${editing ? "" : "disabled"}`}
              onClick={() => handleSaveEdit(row)}
            >
              Save
            </button>
            <button className="action-button" onClick={cancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className={`action-button edit-button ${editing ? "disabled" : ""}`}
              onClick={() => handleEdit(row)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className={`action-button delete-button ${editing ? "disabled" : ""}`}
              onClick={() => handleDelete(row)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}

export default TableRowItem;