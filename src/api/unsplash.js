import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 11c60f69937b32d5759a7c0b432f5c27afd1210ba51d850dc91bb5179cfc0f4e"
  }
});
