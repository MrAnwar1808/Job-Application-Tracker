
import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import JobForm from "../Component/JobForm";
import JobSort from "../Component/JobSort";
import JobList from "../Component/JobList";
import JobPagination from "../Component/JobPagination";
import ExportJobs from "../Component/ExportJobs";


const RenderingJobComponents = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    console.log("Loaded jobs from local storage:", savedJobs);
    setJobs(savedJobs);
  }, []);

  useEffect(() => {
    console.log("Saving jobs to local storage:", jobs);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>
        Job Application Tracker
      </Typography>
      <JobForm addJob={addJob} />
      <JobSort jobs={jobs} setJobs={setJobs} />
      <JobList jobs={jobs} />
      <JobPagination />
      <ExportJobs jobs={jobs} />
    </Container>
  );
};

export default RenderingJobComponents 

