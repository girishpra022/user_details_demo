import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledContainer } from "./ContainerBoxStyle";


export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

interface IProps {
  children: any;
  title?: string;
  maxWidth?:Breakpoint;
}


const ContainerBox: React.FC<IProps> = ({
  children,
  title,
  maxWidth = "sm",
}) => {
  return (
    <StyledContainer maxWidth={maxWidth}>
      <Typography variant="h4" component="span">
        {title}
      </Typography>
      <Box>{children}</Box>
    </StyledContainer>
  );
};

export default ContainerBox;