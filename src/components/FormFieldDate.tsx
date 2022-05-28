import React from "react";
import { FieldProps } from "formik";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface Props extends FieldProps {
  id: string;
  label: string;
  required?: boolean;
}

const FormFieldDate: React.FC<Props> = ({
  field,
  form: { touched, errors },
  id,
  label,
  required,
}) => (
  <Grid item xs={12} sm={6}>
    <TextField
      fullWidth
      id={id}
      label={label}
      type="date"
      required={required}
      InputLabelProps={{
        shrink: true,
      }}
      error={touched[field.name] && Boolean(errors[field.name])}
      helperText={touched[field.name] && Boolean(errors[field.name])}
      {...field}
    />
  </Grid>
);

export default FormFieldDate;
