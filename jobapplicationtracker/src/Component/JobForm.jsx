
import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, Card, CardContent, Typography } from "@mui/material";

const JobForm = ({ addJob }) => {
  const [job, setJob] = useState({ company: "", role: "", status: "Applied" });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.company || !job.role) {
      alert("All fields are required!");
      return;
    }
    addJob(job);
    setJob({ company: "", role: "", status: "Applied" });
  };

  return (
    <Card sx={{ mt: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h6">Add Job Application</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Company" name="company" fullWidth sx={{ mb: 2 }} value={job.company} onChange={handleChange} />
          <TextField label="Role" name="role" fullWidth sx={{ mb: 2 }} value={job.role} onChange={handleChange} />
          <Select name="status" fullWidth sx={{ mb: 2 }} value={job.status} onChange={handleChange}>
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Interview">Interview</MenuItem>
            <MenuItem value="Offer">Offer</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
          <Button type="submit" variant="contained" color="primary">Add Job</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default JobForm;
