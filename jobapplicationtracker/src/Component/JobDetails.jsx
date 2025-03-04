
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const JobDetails = ({ open, handleClose, job }) => {
  if (!job) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4 }}>
        <Typography variant="h6" component="h2">
          {job.client} - {job.role}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Status: {job.status}
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default JobDetails;
