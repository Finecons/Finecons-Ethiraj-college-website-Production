// // import React, { useRef, useState } from 'react';

// // const CustomAudioPlayer = ({ updateAudioURL }) => {
// //   const audioRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(false);

// //   const handlePlayPause = () => {
// //     if (isPlaying) {
// //       audioRef.current.pause();
// //     } else {
// //       audioRef.current.play();
// //     }
// //     setIsPlaying(!isPlaying);
// //   };

// //   const handleStop = () => {
// //     audioRef.current.pause();
// //     audioRef.current.currentTime = 0;
// //     setIsPlaying(false);
// //   };

// //   return (
// //     <div>
// //       <audio ref={audioRef} src={updateAudioURL} style={{ display: 'none' }} />
// //       <button onClick={handlePlayPause}>
// //         {isPlaying ? 'Pause' : 'Play'}
// //       </button>
// //       <button onClick={handleStop}>Stop</button>
// //     </div>
// //   );
// // };

// // export default CustomAudioPlayer;


// import React, { useRef, useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import StopIcon from '@mui/icons-material/Stop';

// const CustomAudioPlayer = ({ updateAudioURL }) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleStop = () => {
//     audioRef.current.pause();
//     audioRef.current.currentTime = 0;
//     setIsPlaying(false);
//   };

//   return (
//     <div>
//       <audio ref={audioRef} src={updateAudioURL} style={{ display: 'none' }} />
//       <IconButton onClick={handlePlayPause} color="primary">
//         {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
//       </IconButton>
//       <IconButton onClick={handleStop} color="secondary">
//         <StopIcon />
//       </IconButton>
//     </div>
//   );
// };

// export default CustomAudioPlayer;


import React, { useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import { FaPause, FaPlay, FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { adminUrl as baseUrl } from '../../constants';



const CustomAudioPlayer = ({ updateAudioURL }) => {
    console.log(updateAudioURL,"updateAudioURLupdateAudioURLupdateAudioURL")
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isMd = useMediaQuery(theme.breakpoints.down('md'));
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const { QuestionAudioPost } = useSelector((state) => state?.QuestionAudioPost);
    console.log(QuestionAudioPost,"player audio")


    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        
      
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%', // Make sure it takes full width of the Grid container
                height: '100%', // Make sure it takes full height of the Grid container
            }}
        >
            <audio
                ref={audioRef}
                src={`${baseUrl}${QuestionAudioPost.data.audioUrl}`}
                style={{ display: 'none' }}
                onEnded={handleEnded}
            />
            <IconButton onClick={handlePlayPause} color="primary" style={{background:"rgb(136 84 192)",height: isLg ? "40%" :"30%",width: isLg ? "25%":"30%",height: isSm ? "20%":"40%"}}>
                {isPlaying ? <FaPause style={{color:"white"}}/> : <FaPlay style={{color:"white"}}/>}
            </IconButton>
            {/* <IconButton onClick={handleStop} color="secondary">
      <StopIcon />
    </IconButton> */}
        </div>
    );
};

export default CustomAudioPlayer;
