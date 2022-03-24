import Layout from "./layout";
import Link from "next/link";
import { getDatabase } from "../src/utils/database";
// import styles from "../styles/Home.module.css";

export default function Panier() {
  return (
    <div>
      <Layout>
        <p>Panier page</p>
      </Layout>
    </div>
  );
}
