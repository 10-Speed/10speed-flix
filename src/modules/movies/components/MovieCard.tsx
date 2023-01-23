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
  tvType: string;
}

export const MovieCard: FC<Props> = ({ title, image, movieId, tvType }) => {
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
          <div style={{position: 'absolute', right: '0px', padding: '5px', margin: '10px', borderRadius: '10px', backgroundColor: 'blueviolet'}}>{tvType}</div>
          <CardMedia component="img" height="380" image={image} alt={title} />
          <CardContent sx={{ height: "6rem" }}>
            <Typography variant="h6">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
