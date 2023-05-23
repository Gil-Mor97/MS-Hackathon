import React from "react";
import Post from "./post/post";
import Box from "@mui/material/Box";

export default function Posts() {
  return (
    <div>
      <Box sx={{ mx: "auto", my: "20px" }}>
        <Post></Post>
      </Box>
      <Box sx={{ mx: "auto", my: "20px" }}>
        <Post></Post>
      </Box>
    </div>
  );
}
