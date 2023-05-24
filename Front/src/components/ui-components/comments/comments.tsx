import React from "react";
import Comment from "./comment/comment";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

export default function Comments() {
  return (
    <div>
      <Box sx={{ mx: "auto", my: "20px" }}>
        <Comment></Comment>
      </Box>
      <Box sx={{ display: "flex", my: "10px" }}>
        <Avatar
          src="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/female1.png?alt=media&token=b2f7ae02-c6c1-48ab-aa58-4417e5843a43"
          sx={{ marginRight: 0, marginLeft: "15px" }}
          aria-label="recipe"
        ></Avatar>
        <TextField
          sx={{ width: "100%", fontSize: 14 }}
          variant="outlined"
          placeholder="כתב.י תגובה..."
        ></TextField>
      </Box>
    </div>
  );
}
