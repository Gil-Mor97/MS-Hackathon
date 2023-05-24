import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./influencers.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Influencers() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <h2>משפיענים</h2>
      <form className="input">
        <Stack spacing={2} sx={{ width: 600 }}>
          <Autocomplete
            sx={{ margin: "0 auto", width: 300 }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={expertsList.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="חיפוש"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          {/* <IconButton aria-label="search" size="small">
            <SearchIcon fontSize="medium" />
          </IconButton> */}
        </Stack>
      </form>

      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/inti-rel-vio.jpg?alt=media&token=d825d834-9432-4ee1-8681-8ccd46058f6c"
          title="Intimate Partner Violence Video"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Intimate Partner Violence
          </Typography>
          <Typography variant="body2" color="text.secondary">
            סרטון הסברה על אלימות מינית במערכת יחסים
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            target="_blank"
            href="https://www.youtube.com/watch?v=vK3RhRwMwIg"
          >
            קישור
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
const expertsList = [{ title: "Intimate Partner Violence" }];
