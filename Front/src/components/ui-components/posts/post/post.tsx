import React from "react";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import Comments from "../../comments/comments";

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
        titleTypographyProps={{ fontWeight: "500" }}
        subheader="14 בספטמבר, 2016"
      />
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          חבר שלי לא מרוצה
        </Typography>
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
        <IconButton aria-label="support">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardActions>
        <Comments></Comments>
      </CardActions>
    </Card>
  );
}
