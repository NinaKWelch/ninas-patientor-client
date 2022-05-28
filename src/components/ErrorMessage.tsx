import React from "react";
import Typography from "@mui/material/Typography";

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Typography color="secondary" align="center" gutterBottom>
    Entry not submitted. {error}.
  </Typography>
);

export default ErrorMessage;
