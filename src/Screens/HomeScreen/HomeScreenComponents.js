import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function HomeScreenComponents() {
  const [current, setCurrent] = useState(0);
  const images_desktop = [
    "https://i.postimg.cc/g0kFDHxJ/161984363688145221.jpg",
    "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2020&q=60",
    "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=2020",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGdyb3VwJTIwZGFuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  ];
  useEffect(() => {
    const next = (current + 1) % images_desktop.length;
    const id = setTimeout(() => setCurrent(next), 2500);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <div className="desktop-carousal">
      {current == 0 && (
        <>
          <img
            className="desktop-carousal-img1"
            src={images_desktop[0]}
            alt=""
          />
          <div className="desktop-carousal-img1-desc carosual-desc">
            <h3>Body Building</h3>
            <h1>make Your Body Stronger</h1>
            <button className="btn btn-secondary">
              {" "}
              <NavLink to="/videos/bodybuilding">Start Now</NavLink>{" "}
            </button>
          </div>
        </>
      )}
      {current == 1 && (
        <>
          <img
            className="desktop-carousal-img2"
            src={images_desktop[1]}
            alt=""
          />
          <div className="desktop-carousal-img2-desc  carosual-desc">
            <h3>Yoga</h3>
            <h1>Loose Yourself in ambience</h1>
          <NavLink  to="/videos/yoga"> <button className="btn btn-secondary">Start Now</button></NavLink> 
          </div>
        </>
      )}
      {current == 2 && (
        <>
          <img
            className="desktop-carousal-img3"
            src={images_desktop[2]}
            alt=""
          />
          <div className="desktop-carousal-img1-desc  carosual-desc">
            <h3>Calisthenics</h3>
            <h1>Commit to be fit</h1>
          <NavLink  to="/videos/calisthetic"> <button className="btn btn-secondary">Start Now</button></NavLink> 
          </div>
        </>
      )}
      {current == 3 && (
        <>
          <img
            className="desktop-carousal-img4"
            src={images_desktop[3]}
            alt=""
          />
          <div className="desktop-carousal-img1-desc  carosual-desc">
            <h3>Zumba</h3>
            <h1>Train your body in fun way</h1>
          <NavLink  to="/videos/zoomba"><button className="btn btn-secondary">Start Now</button></NavLink>  
          </div>
        </>
      )}
      <i
        className="far fa-caret-square-right"
        onClick={() => (current == 3 ? setCurrent(0) : setCurrent(current + 1))}
      ></i>
      <i
        className="far fa-caret-square-left"
        onClick={() => (current == 0 ? setCurrent(3) : setCurrent(current - 1))}
      ></i>
    </div>
  );
}

export default HomeScreenComponents;
