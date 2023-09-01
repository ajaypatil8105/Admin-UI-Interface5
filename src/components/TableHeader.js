import React, { useEffect, useCallback } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

function TableHeader({ allRowsSelected, selectedRows, setSelectedRows, currentRecords, currentPage }) {
  const handleSelectAllClick = useCallback(() => {
    if (allRowsSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...currentRecords]);
    }
  }, [allRowsSelected, currentRecords, setSelectedRows]);

  useEffect(() => {
    
    setSelectedRows([]);
  }, [currentPage, setSelectedRows]);

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={!allRowsSelected && selectedRows.length > 0}
          checked={allRowsSelected}
          onChange={handleSelectAllClick}
          className={allRowsSelected ? "header-checkbox" : ""}
        />
      </TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Name</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Email</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Role</TableCell>
      <TableCell sx={{ fontSize: '20px' }}>Action</TableCell>
    </TableRow>
  );
}

export default TableHeader;