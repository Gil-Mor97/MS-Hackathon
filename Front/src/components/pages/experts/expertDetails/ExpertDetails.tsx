import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./ExpertDetails.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function ExpertDetails() {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>מומחים</h2>

      <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg"
          title="Hagi Moyal"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            חגי מויאל
          </Typography>
          <Typography variant="body2" color="text.secondary">
            מנהל תחום האלימות במשפחה במשרד הרווחה
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">הסטוריית תגובות</Button>
          <Button size="small">+ בקשת תגובה</Button>
        </CardActions>
      </Card>
    </div>
  );
}
const expertsList = [
  { title: "חגי מויאל" },
  { title: "ימית אלפסי" },
  { title: "בת מלך" },
];
