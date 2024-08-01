import styled from "@emotion/styled";

export const SpinnerStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  backgroundColor: "rgba(250, 255, 255, 0.5)",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 9999,
});