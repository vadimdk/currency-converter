import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

interface TableCellProps {
  children: ReactNode;
  noBorder?: boolean;
  noRightBorder?: boolean;
}

const TableCell = ({ children, noBorder, noRightBorder }: TableCellProps) => {
  return (
    <Grid item xs={4}>
      <Box
        sx={{
          p: 2,
          borderRight: noRightBorder ? "" : "1px solid #bab8b8",
          borderBottom: noBorder ? "" : "1px solid #bab8b8",
          minHeight: 75,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default TableCell;
