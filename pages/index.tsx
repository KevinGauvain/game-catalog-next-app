// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

import Layout from "./layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <p>INDEX</p>
      </Layout>
    </div>
  );
}

// import Layout from "./layout";
// import { useUser } from "@auth0/nextjs-auth0";

// export default function Home() {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div>
//         <div>
//           Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
//         </div>
//         <Layout>
//           <p>INDEX TEST</p>
//         </Layout>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div>
//         <a href="/api/auth/login">Login</a>
//       </div>
//       <Layout>
//         <p>INDEX TEST</p>
//       </Layout>
//     </div>
//   );
// }
