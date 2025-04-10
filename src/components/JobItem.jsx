import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  MenuItem,
  Select,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateJobStatus, deleteJob } from '../api/jobApi';

const JobItem = ({ job, onJobUpdated, onJobDeleted }) => {
  const handleStatusChange = async (newStatus) => {
    try {
      await updateJobStatus(job._id, newStatus);
      onJobUpdated();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteJob(job._id);
      onJobDeleted();
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box>
            <Typography variant="h6">{job.company}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {job.role}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {new Date(job.date).toLocaleDateString()}
            </Typography>
            <Typography
              variant="body2"
              component="a"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'block', mt: 1, color: 'primary.main' }}
            >
              View Job
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }}>
            <Select
              value={job.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              size="small"
              sx={{ mr: 2, minWidth: 120 }}
            >
              <MenuItem value="Applied">Applied</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
            </Select>
            <IconButton color="error" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobItem;
