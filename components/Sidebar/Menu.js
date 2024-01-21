import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import icons from "../../utils/icons";
const { SubMenu } = Menu;
function SiderMenu({ routes }) {
  const generateMenus = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.name}
            icon={item.icon && icons[item.icon]}
            title={<span>{item.name}</span>}
          >
            {generateMenus(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.name} icon={item.icon && icons[item.icon]}>
          <Link href={item.route}>
            <a>{item.name}</a>
          </Link>
        </Menu.Item>
      );
    });
  };

  return (
    <div>
      <Menu mode="inline">{generateMenus(routes)}</Menu>
    </div>
  );
}

export default SiderMenu;
