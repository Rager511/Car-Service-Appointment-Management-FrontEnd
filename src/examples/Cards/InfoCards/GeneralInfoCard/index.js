import React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function GeneralInfoCard({ department, role, employmentStartDate, workSchedule }) {
  const fieldColor = "#344767";

  return (
    <Card sx={{ height: "100%", boxShadow: "none" }}>
      <MDBox p={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          General Information
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDTypography variant="button" fontWeight="bold" color="text" sx={{ color: fieldColor }}>
          Department:
        </MDTypography>
        <MDTypography variant="body2" color="text">
          {department}
        </MDTypography>

        <MDTypography variant="button" fontWeight="bold" color="text" sx={{ color: fieldColor }}>
          Role:
        </MDTypography>
        <MDTypography variant="body2" color="text">
          {role}
        </MDTypography>

        <MDTypography variant="button" fontWeight="bold" color="text" sx={{ color: fieldColor }}>
          Employment Start Date:
        </MDTypography>
        <MDTypography variant="body2" color="text">
          {employmentStartDate}
        </MDTypography>

        <MDTypography variant="button" fontWeight="bold" color="text" sx={{ color: fieldColor }}>
          Work Schedule:
        </MDTypography>
        <MDTypography variant="body2" color="text">
          {workSchedule}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

GeneralInfoCard.propTypes = {
  department: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  employmentStartDate: PropTypes.string.isRequired,
  workSchedule: PropTypes.string.isRequired,
};

export default GeneralInfoCard;
