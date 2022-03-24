import Layout from "../layout";
import { GetServerSideProps } from "next";
import { getDatabase } from "../../src/utils/database";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async () => {
  const mongodb = await getDatabase();

  const games = await mongodb
    .db("GamesCatalog-Next-App")
    .collection("games")
    .find()
    .toArray();
  // console.log(games);
  const gamesStringify = JSON.stringify(games);
  const gamesParse = JSON.parse(gamesStringify);
  return {
    props: {
      gamesParse: gamesParse,
    },
  };
};

export default function PlatformsSlug({ gamesParse }) {
  const arrayWithUniquePlat = [];

  const platformUnique = gamesParse.map((element) => {
    if (!arrayWithUniquePlat.includes(element.platform.name)) {
      arrayWithUniquePlat.push(element.platform.name);
    }
  });

  return (
    <div>
      <Layout>
        <div>
          <p></p>
          <p>
            {arrayWithUniquePlat.map((element, index) => (
              <div key={index}>
                <ul>
                  <button>
                    <Link href="platforms_slug">{element}</Link>
                  </button>
                </ul>
              </div>
            ))}
          </p>
        </div>
        <p>PLATFORM SLUG ROUTE</p>
      </Layout>
    </div>
  );
}