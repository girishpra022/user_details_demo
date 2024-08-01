import { FC, useState } from "react";
import UserTable from "./UserTable";
import { useGetUsers } from "../../hooks/hooks";
import { Button, Grid, Paper, Typography } from "@mui/material";

import { UserForm } from "./CreateUserModal";
import { Snackbar } from "../../components/Snackbar";


const Users: FC<{}> = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading, refetch, isError } = useGetUsers({
    limit: 5,
    page: 1,
    sortBy: "asending",
  });

  const handleCreateUser = () => {
    setOpen(!open);
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <>
      {isError && (
        <Snackbar
          message={"something went wrong please try again"}
          autoHideDuration={2000}
          openSnackbar
        />
      )}

      <Paper
        elevation={2}
        sx={{ padding: 5, mr: 1, borderRadius: 2, minWidth: 900 }}
      >
        <Grid
          container
          display="flex"
          flexDirection="row"
          alignContent="center"
        >
          <Grid item>
            <Button onClick={handleCreateUser} variant="contained">
              Create User
            </Button>
          </Grid>
          <Grid item>
            <Typography
              sx={{ mb: 3, fontWeight: "bold", fontSize: 30, ml: 30 }}
            >
              User Table
            </Typography>
          </Grid>
        </Grid>

        <UserTable rows={data?.data || []} loading={isLoading} />
        <UserForm
          open={open}
          setOpen={handleCreateUser}
          handleRefresh={handleRefresh}
        />
      </Paper>
    </>
  );
};

export default Users;
