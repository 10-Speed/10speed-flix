import { FC } from "react";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes";

interface Props {
  title?: string;
  image?: string;
  movieId: string;
  type: string;
}

export const MovieCard: FC<Props> = ({ title, image, movieId, type }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (
    <Grid item xs={6} md={3}>
      <Card
        sx={{
          transition: "transform 0.4s ease",
          ":hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardActionArea
          onClick={() => navigate(routes.movie(`${movieId}${search}`))}
        >
          <CardMedia component="img" height="380" image={image} alt={title} />
          <CardContent sx={{ height: "6rem" }}>
            <Typography variant="h6">{title}</Typography>
            {type && <Typography variant="h6">Type: {type}</Typography>}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
