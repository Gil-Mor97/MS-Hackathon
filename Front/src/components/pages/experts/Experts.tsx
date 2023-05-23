import React from "react";
import { Card, Typography } from "@mui/material";
import { db } from "../../../data/Db";

export default function Experts() {
  return (
    <div>
      <h2>מומחים</h2>
      <div className="prelude">
        <Card>
          <Typography variant="h6" color="text.secondary">
            בית ספר
          </Typography>
        </Card>
      </div>
    </div>
  );
}
