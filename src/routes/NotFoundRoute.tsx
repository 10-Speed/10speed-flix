import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "./routes";

export const NotFoundRoute: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={5}
      p={0}
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <Button onClick={() => navigate(routes.home)}>To movie list</Button>
      <Typography textAlign="center" variant="h3">
        Route not found
      </Typography>
    </Stack>
  );
};
