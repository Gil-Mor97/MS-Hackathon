import React from "react";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/female1.png?alt=media&token=b2f7ae02-c6c1-48ab-aa58-4417e5843a43"
            sx={{ marginRight: 0, marginLeft: "15px" }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="בטוומן53 - גיל 16"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></Typography>
        <Typography variant="body2">
          חבר שלי אמר לי שהוא מעדיף שאני לא אתלבש חשוף, הוא אמר לי שהוא לא רוצה
          שהעיניים של גברים אחרים יהיו על החזה והתחת שלי.
          <br />
          הוא לא אוסר עליי, אבל מעדיף שלא ואני רואה שהוא סובל כשאנחנו יוצאים
          וגברים מסתכלים עליי כשאני עם טופ או שורט. מצד אחד לא באלי לבאס אותו
          אבל באלי ללבוש מה שאני רוצה.
          <br />
          מה לעשות?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
