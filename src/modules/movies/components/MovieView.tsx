import { FC } from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Stack,
  Button,
  Box,
  Grid2,
  Typography,
  Rating,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
} from "@mui/material";
import { FaImdb } from "react-icons/fa";

import { parseImagePath } from "@/api/api.config";
import { MovieResponse } from "@/api/api.types";

interface Props {
  data: MovieResponse;
  backToList?(): void;
}

export const MovieView: FC<Props> = ({ data, backToList }) => (
  <Stack gap={5}>
    <Button onClick={backToList}>Back to movie list</Button>
    {!!data.backdrop_path && (
      <Box
        component="img"
        src={parseImagePath(data.backdrop_path)}
        alt={data?.original_title}
        sx={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          borderRadius: "10px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: "brightness(35%)",
        }}
      />
    )}

    <Grid2 container spacing={5}>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box
            component="img"
            sx={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              maxWidth: {
                xs: "60%",
                md: "100%",
              },
            }}
            src={parseImagePath(data.poster_path)}
            alt={data?.original_title}
          />
        </Box>
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
          <Stack gap={1}>
            <Typography variant="caption">{data.release_date}</Typography>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="body2">
                {data.vote_average.toFixed(1)}
              </Typography>
              <Rating
                name="half-rating"
                defaultValue={2.5}
                value={+data.vote_average.toFixed(1) / 2}
                readOnly
                precision={0.5}
              />
            </Stack>

            <Typography variant="h3">{data.original_title}</Typography>

            <Typography variant="body1" paragraph>
              {data.overview}
            </Typography>

            {!!data.imdb_id && (
              <Box>
                <Link
                  target="_blank"
                  href={`https://www.imdb.com/title/${data.imdb_id}/`}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "1ch",
                    color: "#f3ce13",
                  }}
                >
                  <Typography variant="body1">Open in</Typography>
                  <FaImdb style={{ fontSize: "2rem" }} />
                </Link>
              </Box>
            )}
          </Stack>
        </Box>
      </Grid2>
    </Grid2>

    <Stack>
      {!!data.homepage && (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="homepage-content"
            id="homepage-header"
          >
            <Typography>Home page</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link target="_blank" href={data.homepage}>
              {data.homepage}
            </Link>
          </AccordionDetails>
        </Accordion>
      )}

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="genres-content"
          id="genres-header"
        >
          <Typography>Genres</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" gap={1}>
            {data.genres.map((genre) => (
              <Chip variant="outlined" key={genre.id} label={genre.name} />
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="production-companies-content"
          id="production-companies-header"
        >
          <Typography>Production companies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Origin country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.production_companies.map((company) => (
                <TableRow
                  key={company.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {company.name}
                  </TableCell>
                  <TableCell align="right">
                    {company.origin_country || "-"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="production-countries-content"
          id="production-countries-header"
        >
          <Typography>Production countries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country name</TableCell>
                <TableCell align="right">Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.production_countries.map((country) => (
                <TableRow
                  key={country.iso_3166_1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {country.name}
                  </TableCell>
                  <TableCell align="right">{country.iso_3166_1}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </Stack>
  </Stack>
);
