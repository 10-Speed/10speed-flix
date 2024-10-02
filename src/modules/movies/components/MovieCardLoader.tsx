import { Grid2, Skeleton, Stack } from "@mui/material";
import { FC } from "react";

export const MovieCardLoader: FC = () => (
  <Grid2 size={{ xs: 6, md: 3 }}>
    <Stack spacing={2}>
      <Skeleton width="100%" height={380} variant="rounded" />
      <Skeleton width="100%" height={40} variant="rounded" />
    </Stack>
  </Grid2>
);
