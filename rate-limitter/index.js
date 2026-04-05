// Impelmenting a Rate limitter in Express

import express from "express";

const app = express();

const MAX_ALLOWED_REQUESTS = 5;

const WINDOW = 10; // 10 seconds

let ip_map = {}; // works as a in-memory store to keep track of the number of requests from each IP address similiar to redis or any other in-memory data store

const rateLimiter = (req, res, next) => {
  const user_ip = req?.socket?.remoteAddress;
  const current_timestamp = Math.floor(Date.now() / 1000); // in seconds

  if (!ip_map[user_ip]) {
    ip_map[user_ip] = [];
  }

  ip_map[user_ip] = ip_map[user_ip].filter(
    (ts) => ts > current_timestamp - WINDOW,
  );
  if (ip_map[user_ip].length >= MAX_ALLOWED_REQUESTS) {
    return res.status(429).json({
      msg: "Too Many Requests",
    });
  }

  ip_map[user_ip].push(current_timestamp);

  return next();
};
app.use(rateLimiter);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: `Request received from ${req.socket.remoteAddress}`,
    ip_map,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
