import { DataGrid, GridColDef, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { IUser } from "../../interface/user";



interface ITable {
  rows: IUser[];
  pageSize?: number;
  pageSizeOptions?: number[];
  loading: boolean;
}

const columns: GridColDef<IUser[][number]>[] = [
  {
    field: "firstName",
    headerName: "First Name",
    flex: 1,
    valueGetter: (_, row) => row.firstName,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    flex: 1,
    valueGetter: (_, row) => row.lastName,
  },
  {
    field: "email",
    headerName: "E-Mail",
    flex: 1,
    valueGetter: (_, row) => row.email,
  },
];

const UserTable: FC<ITable> = ({
  rows,
  pageSize = 10,
  pageSizeOptions = [5, 10, 15, 20, 25, 30, 50, 100],
  loading,
}) => {
  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter />
      </Box>
    );
  }
  return (
    <Grid container display="flex" justifyContent="center">
 
    <DataGrid
      sx={{ ml: -1, maxWidth: 1800 }}
      getRowId={(row: IUser) => `row-${row.email}`}
      rows={rows}
      columns={columns}
      {...rows}
      initialState={{
        pagination: { paginationModel: { pageSize: pageSize } },
        filter: {
          filterModel: {
            items: [],
            quickFilterValues: [],
          },
        },
      }}
      slots={{ toolbar: QuickSearchToolbar }}
      loading={loading}
      pageSizeOptions={pageSizeOptions}
    />
    </Grid>
 
  );
};
export default UserTable;
