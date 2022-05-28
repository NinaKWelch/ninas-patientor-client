import React from "react";
import { Patient } from "../types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const PatientDetails: React.FC<{ patient: Patient }> = ({ patient }) => {
  const getGender = (option: string) => {
    switch (option) {
      case "male":
        return (
          <Typography variant="h4" component="span" color="primary">
            {"\u2642"}
          </Typography>
        );
      case "female":
        return (
          <Typography variant="h4" component="span" color="secondary">
            {"\u2640"}
          </Typography>
        );
      default:
        return (
          <Typography variant="h4" component="span" color="textSecondary">
            {"\u2642" + "\u2640"}
          </Typography>
        );
    }
  };

  return (
    <Grid container alignContent="center" justifyContent="space-between">
      <Grid container item xs justifyContent="flex-start">
        <Typography
          variant="h4"
          component="h2"
          color="textPrimary"
          style={{ marginRight: 25 }}
        >
          {patient.name}
        </Typography>
        {getGender(patient.gender)}
      </Grid>
      <Grid item xs={12} sm={4} md={6}>
        <List>
          <ListItem>
            <ListItemText primary="Ssn:" secondary={patient.ssn} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Occupation:"
              secondary={patient.occupation}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
