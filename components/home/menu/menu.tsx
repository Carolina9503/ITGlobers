import React from "react";
import { menuItems, MenuAttr } from "../../../utils/menu";
import styles from "./menu.module.scss";

type MenuProps = {
  selectedMenu?: MenuAttr;
  setSelectedMenu: (item: MenuAttr) => void;
};
const Menu = ({ selectedMenu, setSelectedMenu }: MenuProps) => {
  return (
    <React.Fragment>
      {menuItems.length > 0 && (
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menu__item}>
              <button
                className={`${styles.menu__button} ${
                  item.id === selectedMenu?.id ? styles.menu__item_active : ""
                }`}
                onClick={() => setSelectedMenu(item)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default Menu;
