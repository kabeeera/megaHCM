import React from "react";
import { Menu, Avatar, Layout, Image, Input } from "antd";
import { BellOutlined, MailOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { SubMenu } = Menu;

import styles from "./Header.module.scss";

function AdminHeader() {
  return (
    <Header className={styles.header}>
      <div className={styles.search_wrapper}>
        <span className={styles.search_icon}>
          <Image src="/images/search.png" preview={false} />
        </span>

        <Input placeholder="Search" allowClear />
      </div>
      <div className={styles.header_right}>
        <Menu mode="horizontal" className={styles.mail_icon_wrapper}>
          <span className={styles.active}></span>
          <SubMenu
            icon={
              <div className={styles.mail_icon}>
                <span className={styles.active}></span>

                <Image src="/images/mail.png" preview={false} />
              </div>
            }
          ></SubMenu>
        </Menu>
        <Menu mode="horizontal" className={styles.noti_icon_wrapper}>
          <span className={styles.active}></span>
          <SubMenu
            icon={
              <div className={styles.noti_icon}>
                <span className={styles.active}></span>
                <Image src="/images/noti.png" preview={false} />
              </div>
            }
          ></SubMenu>
        </Menu>
        <Menu mode="horizontal" className={styles.account_icon}>
          <SubMenu icon={<Image src="/images/avatar.png" preview={false} />}>
            <Menu.Item key="setting:1">Profile</Menu.Item>

            <Menu.Item key="setting:3">Account Settings</Menu.Item>

            <Menu.Item key="setting:4">Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
}

export default AdminHeader;
