"use client";
import React, { useContext } from "react";
import eye from "../../../public/assets/eye-slash.svg";
// import plus from "../../../public/assets/eyeing.html";
import { FaRegEye } from "react-icons/fa6";
import styles from "../login/login.module.scss";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LevelContext from "@/context/LevelContext";
import Spinner from "@/components/spinner";

export default function Login() {
  const { loginAdmin } = useContext(LevelContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = loginForm;

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await loginAdmin(email, password);
    setIsLoading(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <Spinner />
      <div className={styles.log_container}>
        <div className={styles.log_wrapper}>
          <div className={styles.legacy}>
            <h1>LEGACY </h1>
            <p>Welcome back</p>
          </div>
        </div>
        <div className={styles.login}>
          <h3>Log in</h3>
          <form onSubmit={submit} className={styles.log_form}>
            <div className={styles.log_label}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="Enter your email"
                className={styles.log_input}
                onChange={handleChange}
              />
            </div>
            <div className={styles.log_label2}>
              <label>Password</label>
              <input
                value={password}
                id="password"
                name="password"
                onChange={handleChange}
                type={show ? "text" : "password"}
                placeholder="*** *** *** ***"
                className={styles.log_input}
              />
              <Image
                src={eye}
                alt="eye"
                width={30}
                className={styles.eye_image}
                onClick={handleShow}
              />
            </div>
            <div className={styles.check_contents}>
              <div className={styles.remember}>
                {/* <img src={check} alt="" className={styles.check_image} width="100%" /> */}
                <p>Remember me</p>
              </div>
              <div className={styles.forget}>
                <p>Forgot Password?</p>
              </div>
            </div>
            <div className={styles.log_button}>
              <div className={styles.link}>
                <li>
                  <button type="submit" className={isLoading? styles.load_btn : styles.log_btn}>
                    {isLoading? 'Loading...' : 'Log In'}
                  </button>
                </li>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
