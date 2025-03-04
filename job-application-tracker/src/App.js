import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import JobForm from "./components/JobForm";
import JobSort from "./components/JobSort";
import JobList from "./components/JobList";
import JobPagination from "./components/JobPagination";
import ExportJobs from "./components/ExportJobs";
import "./styles.css";

const App = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 3 }}>  
              Job Application Tracker   
     </Typography>
      <JobForm addJob={addJob} /><JobSort jobs={jobs} setJobs={setJobs} /><JobList jobs={jobs} />
      <JobPagination />
      <ExportJobs jobs={jobs} />
    </Container>
      );
    };
export default App;