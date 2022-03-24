import Layout from "../layout";
import Link from "next/link";
import { getDatabase } from "../src/utils/database";
import { GetServerSideProps } from "next";
// import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";

// const getServerSideProps: GetServerSideProps = async (context) => {
//   const mongodb = await getDatabase();

//   const pushPrice = await mongodb
//     .db("GamesCatalog-Next-App")
//     .collection("games")
//     .updateMany({}, { $set: { price: 10 } });
//   return <p></p>;
// };

export default function Panier() {
  return (
    <div>
      <Layout>
        <p>Article 1</p>
        <p>Article 2</p>
        <p>Page Panier</p>
        <Card.Img src="/image/coverMissing.jpeg"></Card.Img>
        <p>Total :</p>
      </Layout>
    </div>
  );
}
