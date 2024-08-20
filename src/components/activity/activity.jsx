"use-client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import notes from "/public/assets/Timmysmall.svg";
import styles from "./activity.module.scss";
import LevelContext from "@/context/LevelContext";

const Activity = ({level, day, type}) => {
  const { editItem, setActivity, updateDayItem, createExercises, fetchAllExercises, editActivity } = useContext(LevelContext);
  const [timmyDetail, setTimmyDetail] = useState({
    skillLevel: level,
    trainingSection: type,
    displayName: "",
    description: "",
    imgUrl: '',
    videoUrl: '',
    day: day,
    duration: {
      minutes: "",
      seconds: ""
    }
  });

  const { displayName, description, imgUrl, videoUrl, duration } = timmyDetail;
  const { minutes, seconds } = duration

  useEffect(() => {
    if (editItem) {
      setTimmyDetail(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'minutes' || name === 'seconds') {
      setTimmyDetail((prev) => ({
        ...prev,
        duration: {
          ...prev.duration,
          [name]: value
        }
      }));
    } else {
      setTimmyDetail((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  
  const submit = async (e) => {
    e.preventDefault();
    if (editItem) {
      await editActivity(editItem._id, timmyDetail);
      setActivity(false);
      fetchAllExercises(day, type, level)
    } else {
      await createExercises(timmyDetail)
      setActivity(false);
      fetchAllExercises(day, type, level)
    }
  };


  const handleTimeChange = (e) => {
    const { value, name } = e.target;
    if (/^\d{0,2}$/.test(value)) {
      setTimmyDetail((prev) => ({
        ...prev,
        duration: {
          ...prev.duration,
          [name]: value
        }
      }));
    }
  };

  return (
    <div className={styles.Activity_Container}>
      <div className={styles.Add_New_Activity}>
      <b>{editItem ? "Edit Activity" : `Add new activity / ${type}`}</b>
      </div>
      <form onSubmit={submit} className={styles.Activity_Wrapper}>
        <h4>Basic information</h4>
        <div className={styles.Activity_Head}>
          <p>
            Animation images<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <Image
              src={notes}
              alt="plus"
              width={50}
              height={50}
              className={styles.Animation_Img}
            />
            <input
              type="text"
              id="imgUrl"
              name="imgUrl"
              value={imgUrl}
              className={styles.Activity_Input}
              onChange={handleChange}
              placeholder="Input URL"
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Animation Videos<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              type="text"
              id="videoUrl"
              name="videoUrl"
              value={videoUrl}
              className={styles.Activity_Input}
              onChange={handleChange}
              placeholder="Input URL"
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Animation Name<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={displayName}
              className={styles.Activity_Input}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Description<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              id="description"
              name="description"
              value={description}
              type="text"
              className={styles.Activity_Input}
              onChange={handleChange}
            />
          </div>
        </div>
       
        <div className={styles.Activity_Head}>
          <p>
            Time<span>*</span>
          </p>
          <div className={styles.Activity_Form_two}>
            <input type="text" value={minutes} id="minutes" name="minutes" maxLength="2" onChange={handleTimeChange}  className={styles.Activity_Input} />
            <input type="text" value={seconds} id="seconds" name="seconds" maxLength="2" onChange={handleTimeChange} className={styles.Activity_Input} />
          </div>
        </div>
        <div className={styles.Button_One}>
          <div className={styles.Button_Two}>
            <button onClick={() => setActivity(false)} className={styles.Cancel_btn}>Cancel</button>
            <button type="submit" className={styles.Save_btn}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Activity;
