import React from "react";import { Button } from "@mui/material";
const ExportJobs = ({ jobs }) => {
  const handleExport = () => {
    console.log("Exporting jobs...", jobs);
    alert("Exporting jobs...");
  };

  return (
    <Button variant="outlined" onClick={handleExport} sx={{ mt: 2 }}>  
        Export Jobs    
    </Button>);};
export default ExportJobs;