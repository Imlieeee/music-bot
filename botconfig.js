module.exports = {
  Admins: ["UserID", "UserID"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || ">",
  Port: 80, //Which port website gonna be hosted
  SupportServer: "https://discord.io/sciencegear", // Support Server Link
  Token: process.env.Token || "", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "", 
  ClientSecret: process.env.Discord_ClientSecret || "", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": false,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://media.tenor.com/sce9SDRey4EAAAAi/disc.gif",
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, 
  Website: process.env.Website || "http://127.0.0.1/",

  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "gaana", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    id: "Main",
    host: "lavalink2.devamop.in", 
    port: 8830, 
    pass: "DevamOP", 
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "bf5ee2a72bae40ffadc71a47280e5ff9", 
    ClientSecret: process.env.Spotify_ClientSecret || "053469ffeb3844079fab734ebf3090c2", 
  },


 

};

