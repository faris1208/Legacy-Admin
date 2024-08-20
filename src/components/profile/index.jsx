import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { VscAccount } from "react-icons/vsc";
import notification from "../../../public/assets/Frame 10.svg";
import admin from "../../../public/assets/Group 43.svg";
import pencil from "../../../public/assets/PencilSimpleLine.svg";
import thick from "../../../public/assets/Line 8.svg";
import line from "../../../public/assets/Line 9.svg";
import simple from "../../../public/assets/PencilSimpleLine (1).svg";
import Link from "next/link";
import Layout from "@/components/layout/layout";

const Profile = () => {
  return (
    <Layout>
      <section className={styles.Profile_Container}>
        <div className={styles.Dashboard_Wrapper}>
          <div className={styles.Dashboard_Text}>
            <h2>Personal Information</h2>
          </div>
          <div className={styles.Admin_Wrapper}>
            <div className={styles.Admin_Text}>
              <VscAccount className={styles.Admin_Icon} />
              <p>Hello Admin</p>
            </div>
            <Image
              src={notification}
              alt="notification"
              width={50}
              height={50}
              className={styles.Admin_Img}
            />
          </div>
        </div>
        <div className={styles.Profile_Admin}>
          <div className={styles.Profile_Admin_Head}>
            <Image
              src={admin}
              width={150}
              height={150}
              alt="profile"
              className={styles.Profile_Icon}
            />
            <p>Admin</p>
            <div className={styles.Edit_Para}>
              <p>Edit</p>
              <Image src={pencil} width={15} height={15} alt="pencil" />
            </div>
          </div>
          <div className={styles.Two_Button}>
            <button className={styles.Profile_Button}>My Profile</button>
            <Link href={"/profile/account"}>
              <button className={styles.Account_Button}>
                Account Information
              </button>
            </Link>
          </div>
          <div className={styles.Complete_Wrapper}>
            <p>Your Profile 25% Complete</p>
            <div className={styles.Complete_Head}>
              <Image
                src={line}
                alt="line"
                width={220}
                height={50}
                className={styles.Complete_Thick}
              />
              <Image
                src={thick}
                alt="thick"
                width={550}
                height={50}
                className={styles.Complete_Line}
              />
            </div>
          </div>
          <div className={styles.Complete_Form}>
            <div className={styles.Complete_Label}>
              <label>Email</label>
              <div className={styles.Complete_Text}>
                <p>Lorem ipsum dolor sit amet</p>
                <Image
                  src={simple}
                  alt="simple"
                  width={20}
                  height={50}
                  className={styles.Complete_Icon}
                />
              </div>
            </div>
            <div className={styles.Complete_Label}>
              <label>Phone Number</label>
              <div className={styles.Complete_Text}>
                <p>+2349139254991</p>
                <Image
                  src={simple}
                  alt="simple"
                  width={20}
                  height={50}
                  className={styles.Complete_Icon}
                />
              </div>
            </div>
            <div className={styles.Complete_Label}>
              <label>Location</label>
              <div className={styles.Complete_Text}>
                <p>Lorem ipsum dolor sit amet</p>
                <Image
                  src={simple}
                  alt="simple"
                  width={20}
                  height={50}
                  className={styles.Complete_Icon}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Profile
