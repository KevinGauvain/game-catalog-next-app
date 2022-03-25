import Layout from "../layout";
import Link from "next/link";
import { getDatabase } from "../src/utils/database";
import { GetServerSideProps } from "next";
// import styles from "../styles/Home.module.css";
import { Card } from "react-bootstrap";
import { articlePushCart } from "./games/[games_slug]";

// const getServerSideProps: GetServerSideProps = async (context) => {
//   const mongodb = await getDatabase();

//   const pushPrice = await mongodb
//     .db("GamesCatalog-Next-App")
//     .collection("games")
//     .updateMany({}, { $set: { price: 10 } });
//   return <p></p>;
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const games = await mongodb
    .db("GamesCatalog-Next-App")
    .collection("games")
    .find()
    .toArray();
  const gamesStringify = JSON.stringify(games);
  const gamesParse = JSON.parse(gamesStringify);
  // const slug = await context.params;
  // console.log(slug);
  // console.log(gamesParse);

  return {
    props: {
      gamesParse: gamesParse,
      // slugWithParams: slug,
    },
  };
};

export default function Panier() {
  return (
    <div>
      <Layout>
        <p>Article 1 :</p>
        <p>Article 2:</p>
        <p>Page Panier</p>
        <p>Total :</p>
      </Layout>
    </div>
  );
}
