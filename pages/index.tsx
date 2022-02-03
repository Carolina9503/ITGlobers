import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Form } from "../components/home/form";
import { Menu } from "../components/home/menu";
import styles from "../styles/Home.module.scss";
import { menuItems, MenuAttr } from "../utils/menu";

const Home: NextPage = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuAttr>(menuItems[0]);
  return (
    <div className={styles.container}>
      <Head>
        <title>ITGlobers</title>
        <meta name="description" content="ITGlobers" />
      </Head>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

      <Form menuName={selectedMenu?.name} />
    </div>
  );
};

export default Home;
