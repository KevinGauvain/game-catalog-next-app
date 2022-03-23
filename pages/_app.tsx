import "../styles/globals.css";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

function App({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <UserProvider user={user}>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
