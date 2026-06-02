const ApiClient = require("../client/api-client");

const client = new ApiClient({
  baseUrl: process.env.API_URL,
  apiKey: process.env.API_KEY
});

client.getBalance("PLAYER123");
