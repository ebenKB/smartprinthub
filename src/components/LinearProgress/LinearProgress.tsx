import React, { useState, useEffect } from "react";
import LinearProgress from '@mui/material/LinearProgress';

const CustomLinearProgress = ({ progressEvent } : {progressEvent: {loaded: number, total: number, status: boolean}}) => {
  const [progress, setProgress] = useState({
    status: true,
    value: 10,
  });

  useEffect(() => {
    let timer: any = null;
    if(progressEvent && progressEvent.loaded) {
      const progress = ((progressEvent.loaded / progressEvent.total) * 100)
      setProgress({ value: progress, status: true });

      if (progress === 100) {
        timer = setTimeout(() => {
          setProgress({ value: progress, status: false})
        }, 500)
      }
    }
    return () => {
      if(!progress.status) {
        clearTimeout(timer)
      }
    }
  }, [progressEvent]);

  return (
    <>
      { progress.status ? <LinearProgress variant="determinate" value={progress.value} /> : null}
    </>
  )
}

export default CustomLinearProgress;
