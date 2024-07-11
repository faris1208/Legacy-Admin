"use-client";
import React, { useState } from "react";
import styles from "../beginners/beginners.module.scss";
import Image from "next/image";
import Modal from "@/components/modal/modal";
import edit from "/public/assets/Group 3245.svg";
import delet from "/public/assets/Group 3246.svg";
import del from "/public/assets/Group 3278.svg";

const TimmyDetails = ({
  imageProp,
  animation,
  minute,
  seconds,
  description,
  animationName,
  onDelete,
  onEdit,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Timmy_Head_Two}>
      <div className={styles.Timmy_Head}>
        <input type="checkbox" className={styles.Timmy_Input} />
        <Image
          src={imageProp}
          width={50}
          height={50}
          alt="timmy"
          className={styles.Timmy_Img}
        />
      </div>

      <div className={styles.Strech_One}>
        <p>{animationName}</p>
      </div>
      <div className={styles.Strech_Two}>
        <p>{description}</p>
      </div>

      <div className={styles.Strech_Three}>
        <p>
          {minute}:{seconds}
        </p>
      </div>
      <div className={styles.Strech_Five}>
        <p>{animation}</p>
      </div>
      <div className={styles.Edit_Box}>
        <Image
          src={edit}
          alt="edit"
          width={20}
          onClick={onEdit}
          className={styles.Edit_Icon}
        />
        <Image
          src={delet}
          alt="delete"
          width={20}
          onClick={() => setOpen(true)}
          className={styles.Edit_Icon}
        />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className={styles.Delete_Modal}>
          <Image src={del} alt="modal" width={100} />
          <strong>Delete Activity</strong>
          <p>
            Are you sure you want to delete this activity item? This action
            cannot be undone
          </p>
          <div className={styles.Delete_Modal_btn}>
            <button className={styles.Delete_Modal_btn_One} onClick={onDelete}>
              Delete
            </button>
            <button
              onClick={() => setOpen(false)}
              className={styles.Delete_Modal_btn_Two}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TimmyDetails;
