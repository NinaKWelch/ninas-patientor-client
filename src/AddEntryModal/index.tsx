import React from "react";
import { EntryFormValues } from "../types";
import PatientEntryForm from "./PatientEntryForm";
import ErrorMessage from "../components/ErrorMessage";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

interface Props {
  handleSubmit: (values: EntryFormValues) => void;
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  error?: string;
}

const AddEntryModal: React.FC<Props> = ({
  handleSubmit,
  handleOpen,
  handleClose,
  open,
  error,
}) => (
  <div>
    <Button type="button" variant="outlined" onClick={handleOpen}>
      Add New Entry
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PatientEntryForm onSubmit={handleSubmit} onCancel={handleClose} />
      {error && <ErrorMessage error={error} />}
    </Dialog>
  </div>
);

export default AddEntryModal;
