import { Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router";

export const MainLayout: FC = () => (
  <Container
    sx={{
      py: "2rem"
    }}
  >
    <Outlet />
  </Container>
);
