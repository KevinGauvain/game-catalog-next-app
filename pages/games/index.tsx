import Layout from "../layout";
import Link from "next/link";
// import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Card from "bootstrap";

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

export default function Games({ gamesParse }) {
  return (
    <div>
      <Layout>
        <div>
          <p></p>
          <p>
            {gamesParse.map((element, index) => (
              <div key={index}>
                <ul>
                  <button>
                    <Link href={`/games/${[element.slug]}`}>
                      {element.name}
                    </Link>
                  </button>
                </ul>
                {/* <Image
                  src={gamesParse[0].cover.url}
                  width={500}
                  height={500}
                ></Image> */}
              </div>
            ))}
          </p>
        </div>
        <p>GAMES ROUTE</p>
      </Layout>
    </div>
  );
}

// ---------------brouillon--------------------
// const conditionUrl = gamesParse.map((element) => {
//   if (typeof window !== "undefined") {
//     return (
//       <Card>
//         <Card.Img variant="top" src="{element.cover.url}" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>My text</Card.Text>
//         </Card.Body>
//         <Card.Footer></Card.Footer>
//       </Card>
//     );
//   } else {
//     return (
//       <Card>
//         <Card.Img variant="top" src="public/favicon.ico" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>My text</Card.Text>
//         </Card.Body>
//         <Card.Footer></Card.Footer>
//       </Card>
//     );
//   }
// });
