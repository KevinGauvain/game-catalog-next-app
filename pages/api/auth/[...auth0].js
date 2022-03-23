import { handleAuth } from "@auth0/nextjs-auth0";

export default handleAuth();

// GET https://YOUR_DOMAIN/v2/logout?
//   client_id=YOUR_CLIENT_ID&
//   returnTo=LOGOUT_URL

// app.get("https://game-catalog-website-k/logout?") => {
//   client_id=process.env.AUTH0_CLIENT_ID;
//   returnTo="http://localhost:3000/games";
// }
