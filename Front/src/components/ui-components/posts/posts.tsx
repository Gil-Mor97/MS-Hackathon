import React from "react";
import Post from "./post/post";
import Box from "@mui/material/Box";

export default function Posts() {
  const cont1 = `חבר שלי אמר לי שהוא מעדיף שאני לא אתלבש חשוף, הוא אמר לי שהוא לא רוצה
          שהעיניים של גברים אחרים יהיו על החזה והתחת שלי.
          הוא לא אוסר עליי, אבל מעדיף שלא ואני רואה שהוא סובל כשאנחנו יוצאים
          וגברים מסתכלים עליי כשאני עם טופ או שורט. מצד אחד לא באלי לבאס אותו
          אבל באלי ללבוש מה שאני רוצה.
          מה לעשות?`;
  const cont2 = `חברה שלי יוצאת עם ידידים וזה מפריע לי , אני קנאי בטירוף ואני רוצה להפסיק עם זה , אבל נגיד ואני סומך עליה מפחיד אותי הידידים שלה אולי ינסו לקחת לי אותה . עזרה?
`;

  return (
    <div>
      <h2>ToBetter - דף הבית</h2>
      <Box sx={{ mx: "auto", my: "20px" }}>
        <Post postTitle="חבר שלי לא מרוצה" postContent={cont1}></Post>
      </Box>
      <Box sx={{ mx: "auto", my: "20px" }}>
        <Post postTitle="ידידים של חברה שלי" postContent={cont2}></Post>
      </Box>
    </div>
  );
}
