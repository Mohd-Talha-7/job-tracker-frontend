import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import { addJob } from '../api/jobApi';

const JobForm = ({ onJobAdded }) => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(formData);
      setFormData({
        company: '',
        role: '',
        status: 'Applied',
        date: '',
        link: '',
      });
      if (onJobAdded) onJobAdded(); // for refreshing list after add
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Job Application
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interview">Interview</MenuItem>
          <MenuItem value="Offer">Offer</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </TextField>
        <TextField
          type="date"
          label="Date of Application"
          name="date"
          value={formData.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Application Link"
          name="link"
          value={formData.link}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Add Job
        </Button>
      </Box>
    </Paper>
  );
};

export default JobForm;
