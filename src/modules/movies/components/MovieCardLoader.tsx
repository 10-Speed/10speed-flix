import { FC } from "react";
import { Grid, Stack, Skeleton } from "@mui/material";

export const MovieCardLoader: FC = () => {
  return (
    <Grid item xs={6} md={3}>
      <Stack spacing={2}>
        <Skeleton width="100%" height={380} variant="rounded" />
        <Skeleton width="100%" height={40} variant="rounded" />
      </Stack>
    </Grid>
  );
};
