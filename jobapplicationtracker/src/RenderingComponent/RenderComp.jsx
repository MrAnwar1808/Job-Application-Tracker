
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import JobForm from "../Component/JobForm";
import JobSort from "../Component/JobSort";
import JobList from "../Component/JobList";
import JobPagination from "../Component/JobPagination";
import ExportJobs from "../Component/ExportJobs";


const RenderingJobComponent = () => {
  const [jobs, setJobs] = useState([]);

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

export default RenderingJobComponent
