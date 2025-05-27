import { MovieGenre } from "@/api/api.types";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface FilterBoxProps {
  options: MovieGenre[];
  isFetching: boolean;
  handleFilterChange: (selectedGenres: MovieGenre[]) => void;
  selectedGenres: MovieGenre[];
}

const FilterBox = ({
  options,
  isFetching,
  handleFilterChange,
  selectedGenres
}: FilterBoxProps) => {
  const handleFilterOnChange = (
    _event: React.SyntheticEvent,
    value: MovieGenre[] | null
  ) => {
    handleFilterChange(value ? value : []);
  };
  return (
    <Autocomplete
      disablePortal
      options={options}
      getOptionLabel={(option) => option.name}
      getOptionKey={(option) => option.id}
      sx={{ minWidth: 200 }}
      loading={isFetching}
      multiple
      value={selectedGenres}
      onChange={handleFilterOnChange}
      autoComplete={true}
      renderInput={(params) => <TextField {...params} label="Select Genre" />}
    />
  );
};

export default FilterBox;
