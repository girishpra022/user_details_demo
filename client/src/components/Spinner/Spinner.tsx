import { CircularProgress } from "@mui/material";
import { FC } from "react";
import { SpinnerStyle } from "./SpinnerStyle";




const Spinner:FC= ()=> {
    return(
        <SpinnerStyle>
        <CircularProgress  color="inherit"/>
        </SpinnerStyle>
    )
    
}


export default Spinner;