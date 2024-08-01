import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { IUser } from "../../../interface/user";
import { useForm } from "react-hook-form";
import { intitialValues, UserSchema } from "./UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUser } from "../../../hooks/hooks";
import Spinner from "../../../components/Spinner";
import { Snackbar } from "../../../components/Snackbar";
import ContainerBox from "../../../components/ContainerBox";
import InputField from "../../../components/InputField";

interface IProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  handleRefresh: () => void;
}

const UserForm: FC<IProps> = ({ open, setOpen, handleRefresh }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IUser>({
    defaultValues: intitialValues,
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });

  const { mutateAsync, isLoading, isSuccess, isError, error } = useUpdateUser(
    {}
  );

  console.log('error', error);

  const handleClose = () => {
    setOpen(false);
  };

  const postUserData = async (values: IUser) => {
    const res = await mutateAsync(values);
    if (res) {
      reset();
      handleRefresh();
      handleClose();
      setTimeout(() => {}, 1000);
    }
  };

  return (
    <>
      {isLoading && <Spinner />}
      {isSuccess && (
        <Snackbar
          message={"User created successfully"}
          autoHideDuration={2000}
          openSnackbar
        />
      )}
      {isError && (
        <Snackbar
          message={error.response.data.message}
          autoHideDuration={2000}
          openSnackbar
        />
      )}
      <ContainerBox>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: handleSubmit(postUserData),
          }}
        >
          <DialogTitle>Create User</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} display="flex" flexDirection="column">
              <Grid item xs={12} sm={6} md={3}>
                <InputField
                  name="firstName"
                  label="First Name"
                  type="text"
                  props={{ name: "firstName", control: control }}
                  sx={{ minWidth: 300 }}
                  required
                />
                {errors.firstName && (
                  <Typography>{errors.firstName.message}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InputField
                  name="lastName"
                  label="Last Name"
                  type="text"
                  props={{ name: "lastName", control: control }}
                  sx={{ minWidth: 300 }}
                  required
                />
                {errors.lastName && (
                  <Typography>{errors.lastName.message}</Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InputField
                  name="email"
                  label="Email"
                  type="email"
                  props={{ name: "email", control: control }}
                  sx={{ minWidth: 300 }}
                  required
                />
                {errors.email && (
                  <Typography>{errors.email.message}</Typography>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </ContainerBox>
    </>
  );
};

export default UserForm;
