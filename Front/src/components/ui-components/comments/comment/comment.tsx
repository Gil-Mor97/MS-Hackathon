import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Comment() {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Avatar
          src="https://img.mako.co.il/2020/09/01/edefs_i.jpg"
          sx={{ marginRight: 0, marginLeft: "15px" }}
          aria-label="recipe"
        ></Avatar>
      </Grid>
      <Grid justifyContent="right" item xs zeroMinWidth>
        <Typography
          sx={{ fontSize: 14, fontWeight: 500 }}
          color="text.primary"
          gutterBottom
        >
          גלי עטרי - מומחית
        </Typography>
        <Typography variant="body2">
          תעשי, רק מה שאת חושבת, רק מה שאת אוהבת. שיהיה לך טוב.
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", my: 1 }}>
          פורסם לפני 5 דקות
        </Typography>
      </Grid>
    </Grid>
  );
}
