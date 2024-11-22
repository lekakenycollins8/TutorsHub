'use client';

import { useState } from 'react';
import { TextField, Button, Box, Alert, Paper } from '@mui/material';
import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqaklozp");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return (
      <Box className="max-w-2xl mx-auto">
        <Alert severity="success" className="mb-4">
          Thanks for reaching out! We'll get back to you soon.
        </Alert>
      </Box>
    );
  }

  return (
    <Paper className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit}>
        <Box className="space-y-6">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <Button 
            type="submit"
            variant="contained"
            disabled={state.submitting}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </form>
    </Paper>
  );
}