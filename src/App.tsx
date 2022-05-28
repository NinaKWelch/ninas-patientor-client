import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { apiBaseUrl } from "./constants";
import { useStateValue, setPatientList, setDiagnosisList } from "./state";
import { Patient, Diagnosis } from "./types";
import Header from "./components/Header";
import PatientListPage from "./PatientListPage";
import PatientPage from "./PatientPage";
import ErrorPage from "./components/ErrorPage";

import Container from "@mui/material/Container";

const App: React.FC = () => {
  const [, dispatch] = useStateValue();

  const fetchPatientList = async () => {
    try {
      const { data: patientListFromApi } = await axios.get<Patient[]>(
        `${apiBaseUrl}/patients`
      );

      patientListFromApi && dispatch(setPatientList(patientListFromApi));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchDiagnosisList = async () => {
    try {
      const { data: diagnosisListFromApi } = await axios.get<Diagnosis[]>(
        `${apiBaseUrl}/diagnosis`
      );

      diagnosisListFromApi && dispatch(setDiagnosisList(diagnosisListFromApi));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    void fetchPatientList();
    void fetchDiagnosisList();
  }, [dispatch]);

  const handlePatientList = () => void fetchPatientList();

  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route
            path="/patients/:id"
            element={<PatientPage handlePatientList={handlePatientList} />}
          />
          <Route path="/" element={<PatientListPage />} />
          <Route path="/" element={<ErrorPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
