import { FC } from "react";
import { Stack, Button, Grid2, Skeleton, Box } from "@mui/material";

interface Props {
  backToList?(): void;
}

export const MovieViewLoader: FC<Props> = ({ backToList }) => (
  <Stack gap={5}>
    <Button onClick={backToList}>Back to movie list</Button>

    <Grid2 container spacing={5}>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Skeleton
          sx={{
            width: {
              xs: "50%",
              md: "100%",
            },
            margin: {
              xs: "0 auto",
              md: 0,
            },
            height: {
              xs: "300px",
              md: "387px",
            },
          }}
          variant="rounded"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 9 }}>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Stack gap={2}>
            <Skeleton width="100px" height={15} variant="rounded" />
            <Stack direction="row" alignItems="center" gap={1}>
              <Skeleton width="240px" height={25} variant="rounded" />
            </Stack>
            <Skeleton width="60%" height={45} variant="rounded" />
            <Skeleton width="100%" height={12} variant="rounded" />
            <Skeleton width="100%" height={12} variant="rounded" />
            <Skeleton width="50%" height={12} variant="rounded" />
          </Stack>
        </Box>
      </Grid2>
    </Grid2>

    <Stack gap={1}>
      <Skeleton width="100%" height={50} variant="rounded" />
      <Skeleton width="100%" height={50} variant="rounded" />
      <Skeleton width="100%" height={50} variant="rounded" />
    </Stack>
  </Stack>
);
