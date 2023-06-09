import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./Experts.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ExpertDetails from "./expertDetails/ExpertDetails";

export default function Experts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>מומחים ועמותות</h2>
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

      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://assets.bizclikmedia.net/668/12d54fc4f5670a252374cf5ccafd34ed:d50ee4c573627c54478dcf925a3e3186/image-1.jfif"
          title="Yamit Alfasi"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ד"ר ימית אלפסי
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ביטחון קהילתי הרשות המקומית
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">הסטוריית תגובות</Button>
          <Button size="small">+ בקשת תגובה</Button>
        </CardActions>
      </Card>

      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://www.igul.org.il/wp-content/uploads/2021/01/%D7%9C%D7%95%D7%92%D7%95-%D7%9B%D7%A9%D7%94%D7%9B%D7%9C-%D7%A1%D7%92%D7%95%D7%A8-%D7%90%D7%99%D7%9B%D7%95%D7%AA-%D7%92%D7%91%D7%95%D7%94%D7%94-1.png"
          title="Bat Meleh"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            עמותת בת מלך
          </Typography>
          <Typography variant="body2" color="text.secondary">
            מפעילת מקלטים לדתיות
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">הסטוריית תגובות</Button>
          <Button size="small">+ בקשת תגובה</Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ExpertDetails></ExpertDetails>
        </Box>
      </Modal>
    </div>
  );
}
const expertsList = [
  { title: "חגי מויאל" },
  { title: "ימית אלפסי" },
  { title: "בת מלך" },
];
