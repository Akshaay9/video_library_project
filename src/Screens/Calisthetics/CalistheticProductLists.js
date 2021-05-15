import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { makeAnAPICall } from "../../APICalls";
import { useVideosContext } from "../../Context/VideoLists/VideoContext";
import VideoListCOmponent from "../../UtilityFunctions/VideoListCOmponent";
function CalistheticProductLists() {
  const [videoURl, setVideoURL] = useState("");
  const {
    state: { calisthenicsVideos, calisthenicsLoading },
    videoDIspatch,
  } = useVideosContext();

  useEffect(() => {
    (async () => {
      await makeAnAPICall(
        "GET",
        `https://cryptic-hamlet-94693.herokuapp.com/api/videos/calisthenics`,
        videoDIspatch,
        "LOAD_CALISTHENICS_VIDEO"
      );
    })();
  }, []);
  const opts = {
    height: "580vh",
    width: "100%",
  };
  return (
    <>
      <h2 className="intro">Calisthenic Training</h2>
      {videoURl !== "" && (
        <div className="test">
          <i
            className="far fa-times-circle"
            onClick={() => setVideoURL("")}
          ></i>
          <YouTube videoId={videoURl} opts={opts} className="BG-video-player" />
        </div>
      )}
      <div className="bodyBuilding-Beginner-container">
        {calisthenicsVideos.map((ele) => (
          <>
            <VideoListCOmponent ele={ele} setVideoURL={setVideoURL} />
          </>
        ))}
      </div>
    </>
  );
}

export default CalistheticProductLists;
