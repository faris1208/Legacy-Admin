import React from "react";
import Image from "next/image";
import styles from "./dashboard.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frame from "../../../public/assets/Frame 10.svg";
import { GoChevronDown } from "react-icons/go";
import arrow from "../../../public/assets/ArrowDown.svg";
import arrowred from "../../../public/assets/Group 3264.svg";
import Timmy from "../../../public/assets/Timmy Action pose 4 with background 2.svg";
import Timmytwo from "../../../public/assets/Timmy Action pose 5 with background 2.svg";
import Timmythree from "../../../public/assets/Frame 11795.svg";
import Layout from "../layout/layout";

export default function Dashboard() {
  return (
  <Layout>
    <main className={styles.main}>
      <div className={styles.Bacground_ball}></div>
      <div className={styles.Dashboard_Wrapper}>
        <div className={styles.Dashboard_Text}>
          <h2>Dashboard</h2>
        </div>
        <div className={styles.Admin_Wrapper}>
          <div className={styles.Admin_Text}>
            <VscAccount className={styles.Admin_Icon} />
            <p>Hello Admin</p>
          </div>
          <Image
          src={Frame}
          alt="Frame"
          width={50}
          height={50}
          className={styles.Admin_Img}
           />
        </div>
      </div>
      <section className={styles.Today}>
        <div className={styles.Today_Text}>
          <p>Select date range</p>
          <div className={styles.Today_Box}>
          <p>Today</p>
          <GoChevronDown className={styles.Today_Icon} />
        </div>
        </div>
      </section>
      <section className={styles.Card_Wrapper}>
        <div className={styles.Card_Box}>
          <p>Total Videos</p>
          <h2>5623</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text}>
              <p>+25%</p>
              <Image
              src={arrow}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.Card_Box}>
          <p>Total Views</p>
          <h2>223.2</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text}>
              <p>+14%</p>
              <Image
              src={arrow}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.Card_Box}>
          <p>Active Members</p>
          <h2>105</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text_two}>
              <p>+8.2%</p>
              <Image
              src={arrowred}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.Card_Box}>
          <p>Total Members</p>
          <h2>3613</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text}>
              <p>+15%</p>
              <Image
              src={arrow}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.Card_Box}>
          <p>New Sign Ups</p>
          <h2>30</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text}>
              <p>+59.2%</p>
              <Image
              src={arrow}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>

        <div className={styles.Card_Box}>
          <p>Inactive Members</p>
          <h2>3508</h2>
          <div className={styles.Card_Box_Flex}>
            <div  className={styles.Card_Box_Text_two}>
              <p>+3.2%</p>
              <Image
              src={arrowred}
              width={50}
              height={30}
              className={styles.Arrow}
              alt="arrow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Timmy_Wrapper}>
        <h2>Popular Tutorial</h2>
        <div className={styles.Timmy_Box}>
          <Image
            src={Timmytwo}
            width={300}
            height={200}
            alt="timmy"
            className={styles.Timmy_img}
          />
            <Image
            src={Timmy}
            width={300}
            height={200}
            alt="timmy"
            className={styles.Timmy_img}
          />
            <Image
            src={Timmythree}
            width={300}
            height={200}
            alt="timmy"
            className={styles.Timmy_img}
          />
        </div>
      </section>
    </main>
    </Layout>
  )
}
