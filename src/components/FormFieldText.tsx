import React from "react";
import { FieldProps } from "formik";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

interface Props extends FieldProps {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

const FormFieldText: React.FC<Props> = ({
  field,
  form: { touched, errors },
  id,
  label,
  placeholder,
  required,
}) => (
  <Grid item xs={12}>
    <TextField
      fullWidth
      id={id}
      label={label}
      placeholder={placeholder}
      required={required}
      error={touched[field.name] && Boolean(errors[field.name])}
      helperText={touched[field.name] && Boolean(errors[field.name])}
      {...field}
    />
  </Grid>
);

export default FormFieldText;
