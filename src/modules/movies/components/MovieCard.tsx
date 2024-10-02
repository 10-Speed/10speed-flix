import { routes } from "@/routes/routes";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
}

export const MovieCard: FC<Props> = ({ title, image, movieId }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    <Grid2 size={{ xs: 6, md: 3 }}>
      <Card
        sx={{
          transition: "transform 0.4s ease",
          ":hover": {
            transform: "translateY(-5px)"
          }
        }}
      >
        <CardActionArea
          onClick={() => navigate(routes.movie(`${movieId}${search}`))}
        >
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
