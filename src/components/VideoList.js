import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <Grid container spacing={5}>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} onVideoSelect={onVideoSelect} />
      ))}
    </Grid>
  );
};

export default VideoList;
