import * as React from 'react';
import Box from '@mui/material/Box';
import { Snackbar as MuiSnackbar, Alert, SnackbarOrigin } from "@mui/material";

export type PositionType = "top" | "center" | "left"|"right"|"bottom";

interface State extends SnackbarOrigin {
    open: boolean;
  }

  interface IProps {
    message: string;
    autoHideDuration: number;
    openSnackbar: boolean;
  }

const Snackbar:React.FC<IProps>=({message ,autoHideDuration, openSnackbar = false}) =>{
  const [state, setState] = React.useState<State>({
    open: openSnackbar,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;



  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
    <Box sx={{ width: 500 }}>
      <MuiSnackbar
        anchorOrigin={{ vertical, horizontal }}
        sx={{color:'red'}}
        open={open}
        onClose={handleClose}
        message={message}
        autoHideDuration={autoHideDuration}
        key={vertical + horizontal}
      />
    </Box>
  );
}

export default Snackbar