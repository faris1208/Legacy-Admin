"use-client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import notes from "/public/assets/Timmysmall.svg";
import styles from "./activity.module.scss";
import LevelContext from "@/context/LevelContext";

const Activity = ({level, day, type, editItem, setActivity, handleUpdate}) => {
  const { admin, setAdmin } = useContext(LevelContext);
  const [timmyDetail, setTimmyDetail] = useState({
    id: new Date(),
    anime_image_url: "",
    anime_video_url: "",
    anime_name: "",
    description: "",
    minute: '',
    seconds: '',
  });

  const { anime_image_url, anime_video_url, anime_name, description, minute, seconds, } = timmyDetail;

  useEffect(() => {
    if (editItem) {
      setTimmyDetail(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimmyDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const updateDay = (level, activityType, day, newActivity) => {
    setAdmin((prevAdmin) => {
      // Copy the previous state
      const newState = { ...prevAdmin };

      // Ensure we don't mutate the original state
      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: [...newState[level][activityType][day], newActivity],
        },
      };
      console.log(newState)
      return newState;
    });
  };
  
  const submit = (e) => {
    e.preventDefault();
    if (editItem) {
      handleUpdate(timmyDetail);
    } else {
      updateDay(level, type, day, timmyDetail);
      // console.log(admin.beginners.exercice[day], 'this')
      console.log(level, type, day, timmyDetail);
      setActivity(false);
    }
    console.log(timmyDetail)
  };


  const handleTimeChange = (e) => {
    const { value, name } = e.target;
    // Only allow digits and limit to 2 characters
    if (/^\d{0,2}$/.test(value)) {
        // setMinute(value)
        setTimmyDetail((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
  };

  const types = [
    {
      id: 1,
      type: 'Moves',
      value: 'move'
    },
    {
      id: 2,
      type: 'Drills',
      value: 'drills'
    },
    {
      id: 3,
      type: 'Exercise',
      value: 'exercise'
    },
  ];

  return (
    <div className={styles.Activity_Container}>
      <div className={styles.Add_New_Activity}>
      <b>{editItem ? 'Edit Activity' : 'Add new activity / Exercise'}</b>
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
              id="anime_image_url"
              name="anime_image_url"
              value={anime_image_url}
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
              id="anime_video_url"
              name="anime_video_url"
              value={anime_video_url}
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
              id="anime_name"
              name="anime_name"
              value={anime_name}
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
            <input type="text" value={minute} id="minute" name="minute" maxLength="2" onChange={handleTimeChange}  className={styles.Activity_Input} />
            {/* <p>Min</p> */}
            <input type="text" value={seconds} id="seconds" name="seconds" maxLength="2" onChange={handleTimeChange} className={styles.Activity_Input} />
            {/* <p>Sec</p> */}
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