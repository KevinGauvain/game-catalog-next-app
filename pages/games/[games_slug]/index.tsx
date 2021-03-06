import Layout from "../../../layout";

import { GetServerSideProps } from "next";
import { getDatabase } from "../../../src/utils/database";
import { Card } from "react-bootstrap";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mongodb = await getDatabase();

  const games = await mongodb
    .db("GamesCatalog-Next-App")
    .collection("games")
    .find()
    .toArray();
  const gamesStringify = JSON.stringify(games);
  const gamesParse = JSON.parse(gamesStringify);
  const slug = await context.params;
  // console.log(slug);
  // console.log(gamesParse);

  return {
    props: {
      gamesParse: gamesParse,
      slug: slug,
    },
  };
};

export const articlePushCart = [];
// console.log(articlePushCart);

export default function GamesSlug({ gamesParse, slug }) {
  // const gameChosing = [];
  // console.log("------------gameChosing------", gameChosing);
  return (
    <div>
      <Layout>
        <p>Games Details</p>
        <br />
        <p>
          {gamesParse.map((element) => {
            if (element.slug === slug.games_slug) {
              return (
                <div>
                  <div>
                    {element.cover ? (
                      <Card.Img src={`${[element.cover.url]}`}></Card.Img>
                    ) : (
                      <Card.Img src="../../image/coverMissing.jpeg"></Card.Img>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      articlePushCart.push(slug.games_slug);
                    }}
                  >
                    Add to cart
                  </button>
                  <p>Name : {element.name}</p>
                  <p>Platform : {element.platform.name}</p>
                  <p>Summary : {element.summary}</p>
                </div>
              );
            }
          })}
        </p>
      </Layout>
    </div>
  );
}
