import Layout from "../../layout";
import Link from "next/link";

// import styles from "../styles/Home.module.css";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Card } from "react-bootstrap";
import { useUser } from "@auth0/nextjs-auth0";

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
          <p>Lists of games :</p>
          <br />
          <p>
            {gamesParse.map((element, index) => (
              <div key={index}>
                <ul>
                  <div>
                    <button>
                      <Link href={`/games/${[element.slug]}`}>
                        {element.name}
                      </Link>
                    </button>
                  </div>
                  <div>
                    {element.cover ? (
                      <Card.Img src={`${[element.cover.url]}`}></Card.Img>
                    ) : (
                      <Card.Img src="image/coverMissing.jpeg"></Card.Img>
                    )}
                    <br />
                    {/* <button>Add to cart</button> */}
                  </div>
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
      </Layout>
    </div>
  );
}

// ---------------brouillon--------------------

// import Layout from "../../layout";
// import Link from "next/link";

// // import styles from "../styles/Home.module.css";
// import { GetServerSideProps } from "next";
// import Image from "next/image";
// import Card from "bootstrap";
// import { useUser } from "@auth0/nextjs-auth0";

// import { getDatabase } from "../../src/utils/database";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const mongodb = await getDatabase();

//   const games = await mongodb
//     .db("GamesCatalog-Next-App")
//     .collection("games")
//     .find()
//     .toArray();
//   // console.log(games);
//   const gamesStringify = JSON.stringify(games);
//   const gamesParse = JSON.parse(gamesStringify);
//   // console.log(gamesParse[0]);
//   // console.log("--------", gamesParse[0].cover.url);
//   return {
//     props: {
//       gamesParse: gamesParse,
//     },
//   };
// };

// const isBrowser = typeof window !== "undefined";

// export default function Games({ gamesParse }) {
//   return isBrowser ? (
//     <div>
//       <Layout>
//         <div>
//           <p>Lists of games :</p>
//           <br />
//           <p>
//             {gamesParse.map((element, index) => {
//               if (element.cover.url !== "undefined") {
//                 <div key={index}>
//                   <ul>
//                     <Card.Img src="{element.cover.url}"></Card.Img>
//                     <button>
//                       <Link href={`/games/${[element.slug]}`}>
//                         {element.name}
//                       </Link>
//                     </button>
//                     <br />
//                     {/* <button>Add to cart</button> */}
//                   </ul>
//                   {/* <Image
//                   src={gamesParse[0].cover.url}
//                   width={500}
//                   height={500}
//                 ></Image> */}
//                 </div>;
//               } else {
//                 <div key={index}>
//                   <ul>
//                     <Card.Img src="image/coverMissing.jpeg"></Card.Img>
//                     <button>
//                       <Link href={`/games/${[element.slug]}`}>
//                         {element.name}
//                       </Link>
//                     </button>
//                     <br />
//                     {/* <button>Add to cart</button> */}
//                   </ul>
//                   {/* <Image
//                   src={gamesParse[0].cover.url}
//                   width={500}
//                   height={500}
//                 ></Image> */}
//                 </div>;
//               }
//             })}
//           </p>
//         </div>
//       </Layout>
//     </div>
//   ) : null;
// }

// const conditionUrl = gamesParse.map((element) => {
//   if (element.cover.url !== "undefined") {
//     return (
//       <Card>
//         <Card.Img variant="top" src="{element.cover.url}" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>My text</Card.Text>
//         </Card.Body>
//         <Card.Footer>
// {<button>}
//                     <Link href={`/games/${[element.slug]}`}>
//                       {element.name}
//                     </Link>
//                   </button></Card.Footer> */}
//       </Card>
//     );
//   } else {
//     return (
//       <Card>
//         <Card.Img variant="top" src="image/coverMissing.jpeg" />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>My text</Card.Text>
//         </Card.Body>
//         <Card.Footer>
// { <button>
//                     <Link href={`/games/${[element.slug]}`}>
//                       {element.name} */}
//                     </Link>
//                   </button></Card.Footer>
//  </Card>}
// );
// }
// });
