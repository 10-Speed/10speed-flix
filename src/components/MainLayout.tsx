import { FC } from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
  return (
    <Container
      sx={{
        py: "2rem",
      }}
    >
      <Outlet />
    </Container>
  );
};
