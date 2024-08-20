"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "../beginners/beginners.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frames from "/public/assets/Frame 10.svg";
import { useState } from "react";
import Exercise from "@/components/exercise/exercise";
import Moves from "@/components/moves/moves";
import Drills from "@/components/drills/drills";
import LevelContext from "@/context/LevelContext";
import Layout from "@/components/layout/layout";

export default function Beginners({ id }) {
  const { filterType } = useContext(LevelContext);
  const [activity, setActivity] = useState(false);

  return (
    <Layout>
      <section className={styles.Beginners_Container}>
        <div className={styles.Admin_Wrapper}>
          <div className={styles.Admin_Text}>
            <VscAccount className={styles.Admin_Icon} />
            <p>Hello Admin</p>
          </div>
          <Image
            src={Frames}
            alt="plus"
            width={50}
            height={50}
            className={styles.Admin_Img}
          />
        </div>
        <div className={styles.cat_container}>
          {filterType == "exercise" && <div className={styles.selected_option1}>Exercise</div>}
          {filterType == "drills" && <div className={styles.selected_option1}>Drills</div>}
          {filterType == "moves" && <div className={styles.selected_option1}>Moves</div>}
        </div>
        <p className={styles.Day_One}>Day {id}</p>
        {filterType === "exercise" && (
          <Exercise
            day={id}
            level="Beginner"
            activity={activity}
            setActivity={setActivity}
          />
        )}
        {filterType === "moves" && (
          <Moves
            day={id}
            level="Beginner"
            activity={activity}
            setActivity={setActivity}
          />
        )}
        {filterType === "drills" && (
          <Drills
            day={id}
            level="Beginner"
            activity={activity}
            setActivity={setActivity}
          />
        )}
      </section>
    </Layout>
  );
}
