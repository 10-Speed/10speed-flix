import { routes } from "@/routes/routes";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia, Chip,
  Grid2,
  Tooltip,
  Typography
} from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  title?: string;
  image?: string;
  movieId: string;
  isTvShow?: boolean;
}

export const MovieCard: FC<Props> = ({ title, image, movieId, isTvShow }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    <Grid2 size={{ xs: 6, md: 3 }}>
      <Card
        sx={{
          position: "relative",
          transition: "transform 0.4s ease",
          ":hover": {
            transform: "translateY(-5px)"
          }
        }}
      >
        <CardActionArea
          onClick={() => navigate(routes.movie(`${movieId}${search}`))}
        >
          {isTvShow ?  <Chip sx={{position: "absolute", top: "5px", left: "5px"}} label="TV Show" color="primary" /> : null}

          <CardMedia component="img" height="380" image={image} alt={title} />
          <CardContent sx={{ height: "4rem" }}>
            <Tooltip title={title}>
              <Typography noWrap variant="h6">
                {title}
              </Typography>
            </Tooltip>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid2>
  );
};
