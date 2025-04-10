import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ Add new job
export const addJob = async (jobData) => {
  const response = await axios.post(`${BASE_URL}/api/jobs`, jobData);
  return response.data;
};

// ✅ Get all jobs
export const getJobs = async () => {
  const response = await axios.get(`${BASE_URL}/api/jobs`);
  return response.data;
};

// ✅ Delete a job
export const deleteJob = async (id) => {
  const response = await axios.delete(`${BASE_URL}/api/jobs/${id}`);
  return response.data;
};

// ✅ Update job status
export const updateJobStatus = async (id, status) => {
  const response = await axios.patch(`${BASE_URL}/api/jobs/${id}`, { status });
  return response.data;
};
