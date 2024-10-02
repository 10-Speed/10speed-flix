import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  backToList?(): void;
}

export const MovieViewError: FC<Props> = ({ backToList }) => (
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
    <Button onClick={backToList}>Back to movie list</Button>
    <Typography textAlign="center" variant="h3">
      Invalid movie id
    </Typography>
  </Stack>
);
