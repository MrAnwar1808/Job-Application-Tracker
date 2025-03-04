import React from "react";import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
const JobList = ({ jobs }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>    
                          {jobs.map((job, index) => (  <TableRow key={index}>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.role}</TableCell>
                            <TableCell>{job.status}</TableCell>
                            </TableRow>  ))}        
                </TableBody>
            </Table>
        </TableContainer>
        );
    };
export default JobList;