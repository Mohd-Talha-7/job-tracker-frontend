import React from 'react';
import { Stack, Typography } from '@mui/material';
import JobItem from '../components/JobItem';

const JobList = ({ jobs, onJobUpdated, onJobDeleted }) => {
  if (jobs.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No job applications found.
      </Typography>
    );
  }

  return (
    <Stack spacing={2} sx={{ mt: 4 }}>
      {jobs.map((job) => (
        <JobItem
          key={job._id}
          job={job}
          onJobUpdated={onJobUpdated}
          onJobDeleted={onJobDeleted}
        />
      ))}
    </Stack>
  );
};

export default JobList;
