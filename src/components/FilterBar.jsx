import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const FilterBar = ({ filterStatus, setFilterStatus, filterDate, setFilterDate }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      sx={{ my: 2 }}
    >
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={filterStatus}
          label="Status"
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Offer">Offer</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      <TextField
        type="date"
        label="Date"
        InputLabelProps={{ shrink: true }}
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default FilterBar;
