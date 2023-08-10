import { useState } from "react";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import GeneralInfoCard from "examples/Cards/InfoCards/GeneralInfoCard"; // Replace "path/to/GeneralInfoCard" with the correct import path

// Import missing icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// MisterVoiture components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function GeneralInformations() {
  // Fields related to General Informations
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [employmentStartDate, setEmploymentStartDate] = useState("");
  const [workSchedule, setWorkSchedule] = useState("");

  return (
    <Card sx={{ boxShadow: "none" }}>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            General Information
          </MDTypography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
          <GeneralInfoCard
            department={department}
            role={role}
            employmentStartDate={employmentStartDate}
            workSchedule={workSchedule}
            action={{
              route: "",
              tooltip: "Cancel",
              onClick: onCancel,
            }}
            shadow={false}
          />
          <Divider orientation="vertical" sx={{ mx: 0 }} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default GeneralInformations;
