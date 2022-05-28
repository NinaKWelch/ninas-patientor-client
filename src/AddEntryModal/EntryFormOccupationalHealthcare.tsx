import React, { useState } from "react";
import { Field } from "formik";
import FormFieldText from "../components/FormFieldText";
import FormFieldDate from "../components/FormFieldDate";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const EntryFormOccupationalHealthcare: React.FC = () => {
  const [leave, setLeave] = useState<boolean>(false);

  return (
    <>
      <Field
        id="entry-employer-name"
        label="Employer Name"
        placeholder="Add employer's name"
        name="employerName"
        component={FormFieldText}
        required
      />
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={leave}
              onChange={() => setLeave(!leave)}
              name="sickLeave"
              color="primary"
            />
          }
          label="Assign sick leave"
        />
      </Grid>
      {leave && (
        <>
          <Field
            id="entry-sickleave-start-date"
            label="Start date"
            name="sickLeave.startDate"
            component={FormFieldDate}
          />
          <Field
            id="entry-sickleave-end-date"
            label="End date"
            name="sickLeave.endDate"
            component={FormFieldDate}
          />
        </>
      )}
    </>
  );
};

export default EntryFormOccupationalHealthcare;
