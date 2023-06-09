import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import mdTheme from "../../../theme";
import Posts from "../../ui-components/posts/posts";

function DashboardContent() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            // height: "100vh",
            overflow: "auto",
          }}
        >
          <Posts></Posts>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function LandingPage() {
  return <DashboardContent />;
}
