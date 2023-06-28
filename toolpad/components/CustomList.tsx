import * as React from "react";
import { Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { createComponent } from "@mui/toolpad/browser";

export interface CustomListProps {
  text: string;
  dataList: any;
}

function CustomList({ text, dataList }: CustomListProps) {
  console.log("dataList",dataList,text) 
  return <div style={{ display: "flex", flexWrap: "wrap" }}>
    {(dataList ) && dataList.filter(e => e?.title?.includes(text)).map(e => {
        return (
          <Card sx={{ width: 345, "margin": "40px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={e.imageLink}
                alt={e.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author Name :{e.author}<br />
                  Total Pages :{e.pages}<br />
                  published Year :{e.year}<br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })
    }

  </div>;
}

export default createComponent(CustomList, {
  argTypes: {
    text: {
      type: "string",
    },
    dataList: {
      type: "array"
    },
  },
});
