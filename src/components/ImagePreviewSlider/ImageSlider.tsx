import React, { useState } from "react";
import { Job } from "types/job.type";
import { Button } from "semantic-ui-react";

const ImageSlider = ({ jobs }: {jobs: Job[]}) => {
  const [slider, setSlider] = useState({current: 0,});

  const gotoNext = () => {
    if(slider.current < (jobs.length - 1)) {
      setSlider({current: slider.current + 1})
    } else {
      setSlider({ current: 0})
    }
  }

  const goToPrev = () => {
    if (slider.current > 0) {
      setSlider({ current: slider.current - 1})
    } else {
      setSlider({ current: 0 })
    }
  }

  return (
    <div>
      <div style={{width: "140px",}}>
        <img className="w-full" src={jobs[slider.current].file} alt="" />
      </div>
      {jobs.length > 1 && (
        <>
          <div className="mb-5">{(slider.current + 1)}/{jobs.length}</div>
          <div className="mt-10">
            <Button
              onClick={goToPrev} 
              size="mini" 
              className="mr-10" 
              icon="forward"
            >
              Previous
            </Button>
            <Button
              onClick={gotoNext} 
              size="mini"
              icon="backward"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default ImageSlider