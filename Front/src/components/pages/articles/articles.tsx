import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./articles.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Articles() {
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
      <h2>תוכן לימודי</h2>
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
          image="data:image/jpeg;base64,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"
          title="I-risk"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            שאלון i-risk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            שאלון אנונימי לאבחון סיכון במערכת זוגית
          </Typography>
        </CardContent>
        <CardActions>
          <Button target="_blank" href="https://i-risk.co.il/" size="medium">
            קישור
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
const expertsList = [{ title: "שאלון irisk" }];
