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
  // console.log(games);
  const gamesStringify = JSON.stringify(games);
  const gamesParse = JSON.parse(gamesStringify);
  // console.log(gamesParse);
  // console.log("--------", gamesParse[0].cover.url);

  const slug = await context.params;
  // console.log("-------lg22-------", slug);
  return {
    props: {
      gamesParse: gamesParse,
      slug: slug,
    },
  };
};

export default function PlatformSlug({ gamesParse, slug }) {
  return (
    <div>
      <Layout>
        <p>Lists of games for : {slug.platforms_slug}</p>
        <br />
        <p>
          {gamesParse.map((element) => {
            if (element.platform.name === slug.platforms_slug) {
              return (
                <div>
                  <br />
                  <br />
                  <div>
                    <ul>
                      <p>Name : {element.name}</p>
                      <button>Add to cart</button>
                    </ul>
                  </div>
                  <div>
                    {element.cover ? (
                      <Card.Img src={`${[element.cover.url]}`}></Card.Img>
                    ) : (
                      <Card.Img src="../../image/coverMissing.jpeg"></Card.Img>
                    )}
                  </div>
                </div>
              );
            }
          })}
        </p>
      </Layout>
    </div>
  );
}
