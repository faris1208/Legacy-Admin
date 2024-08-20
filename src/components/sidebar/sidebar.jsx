"use client";
import React, { useContext, useState } from "react";
import styles from "../sidebar/sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";
import card1 from "/public/assets/Component 6.svg";
import { FiHome } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { PiSignOutLight } from "react-icons/pi";
import LevelContext from "@/context/LevelContext";
import Modal from "../modal/modal";

export default function Sidebar() {
  const { isActive, toggleMenu, logout, active, activeLevel, fetchAllExercises } = useContext(LevelContext);
  const [open, setOpen] = useState(false);
  

  return (
    <div className={styles.sidebar_new}>
      <section className={styles.sidebar_section}>
        <div onClick={fetchAllExercises} className={styles.Logo_icon}>
          <Image src={card1} width={150} height={100} alt="card" />
        </div>
        <div>
          <div className={styles.General_Container}>
            <h3>Genaral</h3>
            <div className={styles.General_Head}>
              <Link href="/dashboard">
                <div onClick={() => activeLevel(5)} className={isActive === 5 ? styles.sidebar_menu: styles.dashboard_text }>
                  <FiHome className={styles.Dribble} />
                  <h4>Dashboard</h4>
                </div>
              </Link>
            </div>
            <div className={styles.General_Head_Level}>
              <div className={[1, 2, 3, 4, 6].includes(isActive) ? styles.sidebar_menu: styles.dashboard_text } onClick={toggleMenu}>
                <FaDribbble className={styles.Dribble} />
                <h4>Levels</h4>
                <BsChevronDown />
              </div>
            </div>

            <div className={active ? styles.expert : styles.expert_block}>
              <ul>
                <Link className={styles.link} href="/levels/beginner">
                  <li
                    className={`${
                      isActive === 1 ? styles.active : ""
                    }`}
                    onClick={() => activeLevel(1)}
                  >
                    Beginner
                  </li>
                </Link>
                <Link className={styles.link} href="/levels/intermediate">
                  <li
                    className={`${
                      isActive === 2 ? styles.active : ""
                    }`}
                    onClick={() => activeLevel(2)}
                  >
                    Intermediate{" "}
                  </li>
                </Link>
                <Link className={styles.link} href="/levels/expert">
                  <li
                    className={`${
                      isActive === 3 ? styles.active : ""
                    }`}
                    onClick={() => activeLevel(3)}
                  >
                    Expert{" "}
                  </li>
                </Link>
                <Link className={styles.link} href="/levels/elite">
                  <li
                    className={` ${
                      isActive === 4 ? styles.active : ""
                    }`}
                    onClick={() => activeLevel(4)}
                  >
                    Elite{" "}
                  </li>
                </Link>
              </ul>
            </div>

            <h3>Accounts</h3>
            <div className={styles.General_Head}>
              <Link href="/profile">
                <div onClick={() => activeLevel(7)} className={isActive === 7 ? styles.sidebar_menu: styles.dashboard_text }>
                  <CgProfile className={styles.Dribble} />
                  <h4>My profile</h4>
                </div>
              </Link>
            </div>
            <div className={styles.General_Head_Two}>
              {/* <Link href="/levels/beginners"> */}
                <div onClick={() => setOpen(true)} className={styles.Dashboard_Text_Two}>
                  <PiSignOutLight className={styles.Dribble_Two} />
                  <h4>LOGOUT</h4>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className={styles.logout_Modal}>
          <strong>Logout</strong>
          <p>
            Are you sure you want to Logout
          </p>
          <div className={styles.logout_modal_btn}>
            <button onClick={logout} className={styles.logout_modal_btn_one}>
              Logout
            </button>
            <button
              onClick={() => setOpen(false)}
              className={styles.logout_modal_btn_two}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
