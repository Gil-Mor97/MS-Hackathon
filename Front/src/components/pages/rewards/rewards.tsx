import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./rewards.css";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Rewards() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div>
      <h2>פרסים</h2>
      <div className="coinsBadge"></div>
      <div>
        <Stack className="chips-bar" direction="row">
          <Chip
            sx={{ mx: 1, color: "white", backgroundColor: "rgb(162, 32, 158)" }}
            label="כל המתנות"
            onClick={handleClick}
          />
          <Chip
            clickable={true}
            sx={{ mx: 1 }}
            label="אוכל"
            onClick={handleClick}
          />
          <Chip
            clickable={true}
            sx={{ mx: 1 }}
            label="בילוי ופנאי"
            onClick={handleClick}
          />
          <Chip
            clickable={true}
            sx={{ mx: 1 }}
            label="אופנה"
            onClick={handleClick}
          />
        </Stack>
      </div>
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/krav-maga.png?alt=media&token=95c62abc-56a7-4ab0-8aa3-0e0d4ebc36be"
          title="סדנת קרב מגע"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            סדנת קרב מגע
          </Typography>
          <Typography variant="body2" color="text.secondary">
            20000 נקודות
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" target="_blank" href="">
            מימוש
          </Button>
        </CardActions>
      </Card>
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/superland.png?alt=media&token=27ee0f7f-c6a2-4132-8775-87bd13753e43"
          title="סופרלנד"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            2 כרטיסים מתנה לסופרלנד
          </Typography>
          <Typography variant="body2" color="text.secondary">
            14000 נקודות
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" target="_blank" href="">
            מימוש
          </Button>
        </CardActions>
      </Card>
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 150 }}
          image="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/sadna.png?alt=media&token=19c96c11-8f64-41fa-a23e-6de2462b35f9"
          title="סדנת אומנויות"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            סדנת אומנויות (צילום ,משחק ,שירה לבחירתך)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            32000 נקודות
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" target="_blank" href="">
            מימוש
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
const expertsList = [{ title: "פסק-זמן" }, { title: "chessmatec" }];
