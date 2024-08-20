"use client"
import React, { useContext } from "react";
import styles from "./level.module.scss";
import Link from "next/link";
import LevelContext from "@/context/LevelContext"
import Layout from "@/components/layout/layout";

export default function Level({ level }) {
  const { filterType, setFilterType, fetchAllExercises } = useContext(LevelContext);

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const more = [
    {
      id: 1,
      gg: "Exercise",
      value: "exercise",
    },
    {
      id: 2,
      gg: "Drills",
      value: "drills",
    },
    {
      id: 3,
      gg: "Moves",
      value: "moves",
    },
  ];

  const getThem =(day) => {
    fetchAllExercises(day, filterType, level)
  }

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  return (
    <Layout>
      <div className={styles.container}>
      <div className={styles.cat_container}>
        {more.map((item) => (
          <div
            key={item.id}
            onClick={() => handleFilterChange(item.value)}
            className={
              filterType === item.value
                ? styles.selected_option1
                : styles.selected_option
            }>
            {item.gg}
          </div>
        ))}
      </div>
      <div className={styles.day_card_grid}>
        {days.map((day) => (
          <Link key={day} href={`/levels/${level}/${day}`}>
            <div className={styles.day_card}>Day{day}</div>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
}
