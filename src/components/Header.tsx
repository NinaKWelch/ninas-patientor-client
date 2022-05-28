import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@mui/material//Toolbar";
import Typography from "@mui/material//Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const Header: React.FC = () => (
  <Toolbar disableGutters style={{ marginBottom: 35 }}>
    <Typography component="h1" variant="h5" style={{ flexGrow: 1 }}>
      <Link
        component={RouterLink}
        to="/"
        underline="none"
        color="primary"
        variant="inherit"
      >
        Patientor
      </Link>
    </Typography>
    <Button component={RouterLink} to="/" color="primary">
      Home
    </Button>
  </Toolbar>
);

export default Header;
