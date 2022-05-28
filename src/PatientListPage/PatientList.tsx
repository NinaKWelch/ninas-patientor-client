import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Patient } from "../types";
import HealthRatingBar from "../components/HealthRatingBar";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";

const PatientList: React.FC<{ patients: Patient[] }> = ({ patients }) => (
  <TableContainer component={Paper} style={{ marginTop: 35 }}>
    <Table aria-label="patient list">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <Hidden xsDown>
            <TableCell align="right">Gender</TableCell>
          </Hidden>
          <Hidden smDown>
            <TableCell align="right">Occupation</TableCell>
          </Hidden>
          <TableCell align="right">Health Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patients.map((patient: Patient) => (
          <TableRow key={patient.id}>
            <TableCell component="th" scope="row">
              <Link component={RouterLink} to={`/patients/${patient.id}`}>
                {patient.name}
              </Link>
            </TableCell>
            <Hidden xsDown>
              <TableCell align="right">{patient.gender}</TableCell>
            </Hidden>
            <Hidden smDown>
              <TableCell align="right">{patient.occupation}</TableCell>
            </Hidden>
            <TableCell align="right">
              {typeof patient.healthRating === "number" ? (
                <HealthRatingBar
                  rating={patient.healthRating}
                  showText={false}
                />
              ) : (
                patient.healthRating
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default PatientList;
