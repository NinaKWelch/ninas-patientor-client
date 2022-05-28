import React, { ReactNode } from "react";
import { getDate } from "../utils";
import { Diagnosis } from "../types";
import EntryDiagnosis from "./EntryDiagnosis";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import LocalHospital from "@mui/icons-material/LocalHospital";
import HomeRepairService from "@mui/icons-material/HomeRepairService";
import Poll from "@mui/icons-material/Poll";
import { red, orange, green } from "@mui/material/colors";

interface Props {
  type: string;
  date: string;
  description: string;
  codes?: Array<Diagnosis["code"]>;
  children?: ReactNode;
}

const EntryCard: React.FC<Props> = ({
  type,
  date,
  description,
  codes,
  children,
}) => {
  const getAvatar = (param: string) => {
    switch (param) {
      case "Occupational Healthcare":
        return (
          <Avatar style={{ backgroundColor: orange[700] }}>
            <HomeRepairService />
          </Avatar>
        );
      case "Health Check":
        return (
          <Avatar style={{ backgroundColor: green[700] }}>
            <Poll />
          </Avatar>
        );
      default:
        return (
          <Avatar style={{ backgroundColor: red[700] }}>
            <LocalHospital />
          </Avatar>
        );
    }
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          avatar={getAvatar(type)}
          title={type}
          subheader={getDate(date)}
        />
        <CardContent>
          {codes && codes.length > 0 ? <EntryDiagnosis codes={codes} /> : null}
          <Typography
            color="textSecondary"
            component="p"
            style={{ marginBottom: 15 }}
          >
            {description}
          </Typography>
          {children && (
            <>
              <Divider variant="fullWidth" />
              <div style={{ marginTop: 15 }}>{children}</div>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EntryCard;
