import React from 'react'
import { useWatchLaterContext } from '../../Context/WatchLaterVideoContext/WatchLaterVideoContext'
import { NavLink, useLocation } from "react-router-dom";

function WatchLaterLists() {
    const { state: { watchLaterVideo }, watchLaterDispatch } = useWatchLaterContext()
    let location = useLocation();
    return (
        <div className="liked-video">
             <div className="playList-container-heading like-heading">
                Watch Later Videos
      </div>
      {watchLaterVideo.map((ele, index) => (
        <div className="liked-video-container">
          <NavLink
            to={{
              pathname: `/video/${ele.id}`,
            }}
            state={{ from: location.pathname }}
          >
            <div className="liked-video-left">
              <div className="individual-right-videos-desc">
                <span className="like-count">{index + 1}</span>
                <div className="individual-right-img">
                  <img src={ele.img} alt="" />
                </div>
                <div className="individual-right-desc-title">
                  <h2>{ele.title}</h2>
                  <h3>{ele.ChannelName}</h3>
                </div>
              </div>
            </div>
          </NavLink>
          <div className="liked-video-mid">
            <i className="fab fa-google-play playlist-play"></i>
          </div>
          <div className="liked-video-right">
            <i
              className="fas fa-trash"
              onClick={() =>
                watchLaterDispatch({
                  type: "REMOVE_FROM_LIKED_VIDEOS",
                  payload: ele,
                })
              }
            ></i>
          </div>
        </div>
      ))}
        </div>
    )
}

export default WatchLaterLists
