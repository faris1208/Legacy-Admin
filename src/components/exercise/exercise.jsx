"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "./exercise.module.scss";
import Timmy from "/public/assets/Timmysmall.svg";
import plus from "/public/assets/Plus.svg";
import { useState } from "react";
import Activity from "@/components/activity/activity";
import TimmyDetails from "@/levels/beginners/TimmyDetails";
import LevelContext from "@/context/LevelContext"

export default function Exercise({ level, day }) {
  const { admin, updateDayItem, deleteDayItem, editItem, setEditItem, activity, setActivity } = useContext(LevelContext);

  const addNewField = () => {
    setActivity(true);
  };


  const handleEdit = (item) => {
    setEditItem(item);
    setActivity(true);
  };

  

  return (
    <section className={styles.Beginners_Container}>
      {!activity && (
        <div>
          <section className={styles.Activity_Container}>
            <div className={styles.Animation_Wrapper}>
              <ul>
                <li>Animation</li>
                <li>Activity Name</li>
                <li>Description</li>
                <li>Duration</li>
                <li>Animation URL</li>
              </ul>
            </div>
            <div className={styles.Activty_Container}>
              <div className={styles.Activty_Form}>
                {admin[level]['exercise'][day].length === 0 && (
                  <div className={styles.No_Activities}>No Activites Yet</div>
                )}
                {admin[level]['exercise'][day].map((timmy) => (
                  <div key={timmy.id}>
                    <TimmyDetails
                      imageProp={Timmy}
                      animationName={timmy.anime_name}
                      animation={timmy.anime_image_url}
                      description={timmy.description}
                      minute={timmy.minute}
                      seconds={timmy.seconds}
                      onDelete={() => deleteDayItem(level, 'exercise', day, timmy.id)}
                      onEdit={() => handleEdit(timmy)}
                    />
                  </div>
                ))}

                <div onClick={addNewField} className={styles.Plus_Wrapper}>
                  <div className={styles.Plus}>
                    <Image src={plus} alt="plus" width={30} height={30} />
                    <p>Add More Fields</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {activity && (
        <Activity
          type='exercise'
          day={day}
          level={level}
        />
      )}
    </section>
  );
}

