import React from "react";
import { FormikProps } from "formik";
import { Diagnosis } from "../types";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material";
interface Props {
  setFieldValue: FormikProps<{ diagnosisCodes: string[] }>["setFieldValue"];
  setFieldTouched: FormikProps<{ diagnosisCodes: string[] }>["setFieldTouched"];
  diagnoses: Diagnosis[];
  codes: string[] | undefined;
}

const EntryFormDiagnosis: React.FC<Props> = ({
  setFieldValue,
  setFieldTouched,
  diagnoses,
  codes,
}) => {
  const field = "diagnosisCodes";

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const values = event.target.value;

    if (values) {
      setFieldValue(field, values);
      setTimeout(() => setFieldTouched(field, true));
    }
  };

  const stateOptions = diagnoses.map((diagnosis: Diagnosis) => (
    <MenuItem key={diagnosis.code} value={diagnosis.code}>
      <Typography variant="inherit" noWrap>
        {diagnosis.name} ({diagnosis.code})
      </Typography>
    </MenuItem>
  ));

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <Select
          multiple
          displayEmpty
          value={codes}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => (
            <Typography variant="inherit" style={{ padding: "10px 14px" }}>
              {selected.length === 0 ? "Add Diagnosis" : selected.join(", ")}
            </Typography>
          )}
          inputProps={{ "aria-label": "diagnosis" }}
        >
          <MenuItem disabled value="">
            <Typography variant="inherit">Diagnosis</Typography>
          </MenuItem>
          {stateOptions}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default EntryFormDiagnosis;
