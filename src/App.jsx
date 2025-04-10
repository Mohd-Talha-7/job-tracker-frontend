import React, { useState, useEffect } from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import JobForm from './components/JobForm';
import JobList from './pages/JobList';
import FilterBar from './components/FilterBar';
import { getJobs } from './api/jobApi';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDate, setFilterDate] = useState('');

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchStatus = filterStatus ? job.status === filterStatus : true;
    const matchDate = filterDate ? job.date === filterDate : true;
    return matchStatus && matchDate;
  });

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          🎯 Student Job Tracker
        </Typography>

        <JobForm onJobAdded={fetchJobs} />

        <FilterBar
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
        />

        <JobList
          jobs={filteredJobs}
          onJobUpdated={fetchJobs}
          onJobDeleted={fetchJobs}
        />
      </Container>
    </>
  );
};

export default App;
