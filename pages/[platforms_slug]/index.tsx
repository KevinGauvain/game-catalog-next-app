import Layout from "../layout";

import { GetServerSideProps } from "next";
import { getDatabase } from "../../src/utils/database";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const games = await mongodb
    .db("GamesCatalog-Next-App")
    .collection("games")
    .find()
    .toArray();
  // console.log(games);
  const gamesStringify = JSON.stringify(games);
  const gamesParse = JSON.parse(gamesStringify);
  // console.log(gamesParse[0]);
  // console.log("--------", gamesParse[0].cover.url);
  return {
    props: {
      gamesParse: gamesParse,
    },
  };
};

export default function GamesSlug() {
  return (
    <div>
      <Layout>
        <p>GAMES PLATFORMS PAGE</p>
      </Layout>
    </div>
  );
}
