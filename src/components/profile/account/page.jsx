import React from 'react'
import Image from "next/image";
import styles from "../account/account.module.scss";
import { VscAccount } from "react-icons/vsc";
import notifications from "../../../../public/assets/Frame 10.svg";
import admin from "../../../../public/assets/Group 43.svg";
import pencil from "../../../../public/assets/PencilSimpleLine.svg";
import Link from 'next/link';

export default function page() {

  return (
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
            src={notifications}
            alt='notifications'
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
                alt='profile'
                className={styles.Profile_Icon}
                />
                <p>Admin</p>
                <div className={styles.Edit_Para}>
                    <p>Edit</p>
                    <Image
                    src={pencil}
                    width={15}
                    height={15}
                    alt='pencil'
                     />
                </div>
            </div>
            <div className={styles.Two_Button}>
                <Link href={"/profile"}>
                    <button className={styles.Profile_Button}>My Profile</button>
                </Link>
                <Link href={"/profile/account"}>
                    <button className={styles.Account_Button}>Account Information</button>
                </Link>
            </div>
            <div className={styles.Account_Wrapper}>
                <div className={styles.Account_Information}>
                    <h3>Account Information</h3>
                </div>
                <div className={styles.Last_Login}>
                    <p>Last Login</p>
                    <div className={styles.Verified_Status}>
                        <strong>Aug 14, 2023</strong>
                    </div>
                </div>
                <div className={styles.Last_Login}>
                    <p>Account Email</p>
                    <div className={styles.Verified_Status}>
                        <strong>Lorem ipsum dolor sit</strong>
                    </div>
                </div>
                <div className={styles.Last_Login}>
                    <p>Email Status</p>
                    <div className={styles.Verified_Status}>
                        <strong>Verified</strong>
                    </div>
                </div>
                <div className={styles.Last_Login}>
                    <p>Profile ID</p>
                    <div className={styles.Verified_Status}>
                        <strong>445609</strong>
                    </div>
                </div>
                <div className={styles.Last_Login}>
                    <p>Gender</p>
                    <div className={styles.Verified_Status}>
                        <strong>Male</strong>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
