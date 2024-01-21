import React from "react";
import styles from "./Profile.module.scss";
import { Button, Image } from "antd";

const Profile = () => {
  const profile = {
    name: "M Rameez",
    title: "Senior",
    imageURL: "/images/display.png",
  };
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.cover}>
        <div className={styles.profile_details_wrapper}>
          <div className={styles.profile_content}>
            <div className={styles.display}>
              <Image preview={false} src={profile.imageURL} />
              <div className={styles.upload_img}>
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  hidden
                />
                <label htmlFor="icon-button-file">
                  <span>
                    <Image preview={false} src="/images/edit-icon.png" />
                  </span>
                </label>
              </div>
            </div>
            <div className={styles.profile_title}>
              <h3>{profile.name}</h3>
              <p>{profile.title}</p>
            </div>
          </div>

          <Button className={styles.edit_profile}>
            <Image preview={false} src="/images/box-icon.png" />
            <span>Edit</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
