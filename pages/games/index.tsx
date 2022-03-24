import Layout from "../layout";
// import Link from "next/link";
// import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Img from "react";
import Card from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { getDatabase } from "../../src/utils/database";

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
  console.log(gamesParse[0]);
  console.log("--------", gamesParse[1].name);
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
            {gamesParse.map((element) => (
              <div>
                <ul>
                  {element.name}
                  <Card>
                    <Card.Img variant="top" src="{element.cover.url}" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                  {/* <Image
                    className="card-img-top"
                    src={element.cover.url}
                    alt="Game's cover"
                    width={500}
                    height={500}
                  ></Image>
                  <Card.Img src={game.cover.url}/> */}
                </ul>
              </div>
            ))}
          </p>
        </div>
        <p>GAMES ROUTE</p>
      </Layout>
    </div>
  );
}

// if game.cover === undefined %}
//               <img class="card-img-top" src="images/CoverMissing.jpg" alt ="Game's cover is missing" />
//               {% else %}
//               <img class="card-img-top" src="{{game.cover.url}}" alt="Game's cover" />
