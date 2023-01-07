import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
const [playVideo, setPlayVideo] = React.useState(false);
const vidRef = React.useRef();

return (
<div className="app__video">
    <video
    ref={vidRef}
    src="/Video/meal.a1b6c6dc67dfa2f99343.mp4"
    type="video/mp4"
    loop
    controls={false}
    muted
    />
<div className="app__video-overlay">
    <div
        className="app__video-overlay_circle "
        onClick={() => {
        setPlayVideo(!playVideo);
        if (playVideo) {
            vidRef.current.pause();
        } else {
            vidRef.current.play();
        }
        }}
    >
        {playVideo ? (
        <BsPauseFill color="#fff" fontSize={30} />
        ) : (
        <BsFillPlayFill color="#fff" fontSize={30} />
        )}
    </div>
    </div>
</div>
);
};

export default Intro;
