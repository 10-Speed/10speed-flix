import { Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => (
  <Container
    sx={{
      py: "2rem"
    }}
  >
    <Outlet />
  </Container>
);
