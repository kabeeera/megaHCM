import React, { useState } from "react";
import { Layout, Image } from "antd";
import SiderMenu from "./Menu";
import { routes } from "../../routes";
const { Sider } = Layout;

import styles from "../Layout/Layout.module.scss";
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <>
      <Sider
        collapsed={collapsed}
        onCollapse={onCollapse}
        breakpoint="lg"
        width="282"
        className="sidebar"
      >
        <div
          className={`${styles.sidebar_header} ${
            collapsed && styles.collapsed
          }`}
        >
          {!collapsed && (
            <div className={styles.sidebar_logo}>
              <Image src="/images/logo.png" preview={false} />
            </div>
          )}
          <div
            className={styles.sidebar_collapse}
            onClick={() => setCollapsed(!collapsed)}
          >
            <Image src="/images/collapse-icon.png" preview={false} />
          </div>
        </div>
        <SiderMenu routes={routes} />
      </Sider>
    </>
  );
}
