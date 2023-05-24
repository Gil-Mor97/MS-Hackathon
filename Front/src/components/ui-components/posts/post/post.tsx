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

interface PostProps {
  postContent: string;
  postTitle: string;
}

export const Post: React.FC<PostProps> = ({
  postContent,
  postTitle,
}: PostProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar
            src="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/female3.png?alt=media&token=464c2a05-fcb9-4a4d-8ec6-203d3c86f331"
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
          {postTitle}
        </Typography>
        <Typography style={{ whiteSpace: "pre-line" }} variant="body2">
          {postContent}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="support">
          <FavoriteIcon sx={{ color: "rgb(162, 32, 158)" }} />
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
};

export default Post;
