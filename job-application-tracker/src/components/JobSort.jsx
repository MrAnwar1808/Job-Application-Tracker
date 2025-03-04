import React from "react";import { Select, MenuItem } from "@mui/material";
const JobSort = ({ jobs, setJobs }) => {
  const handleSort = (e) => {
    const status = e.target.value;
    const sortedJobs = status === "All" ? jobs : jobs.filter((job) => job.status === status);
    setJobs([...sortedJobs]);
  };

  return (
    <Select defaultValue="All" fullWidth onChange={handleSort} sx={{ mt: 2 }}>
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="Applied">Applied</MenuItem>
        <MenuItem value="Interview">Interview</MenuItem>
        <MenuItem value="Offer">Offer</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
        );
    };
export default JobSort;