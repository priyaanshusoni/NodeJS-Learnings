import express from "express";
import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  username: `${process.env.REDIS_USERNAME}`,
  password: `${process.env.REDIS_PASSWORD}`,
  socket: {
    host: `${process.env.REDIS_HOST}`,
    port: 17461,
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));
await client.connect();
console.log("Redis connected!");

const app = express();

const MAX_ALLOWED_REQUESTS = 5;
const WINDOW = 10; // 10 seconds

const rateLimiter = async (req, res, next) => {
  const user_ip = req?.socket?.remoteAddress;
  const current_timestamp = Math.floor(Date.now() / 1000);

  // Get all stored timestamps for this IP
  const timestamps = await client.lRange(user_ip, 0, -1);

  // Filter only timestamps within the current window
  const valid_timestamps = timestamps.filter(
    (ts) => Number(ts) > current_timestamp - WINDOW,
  );

  // Check if limit exceeded
  if (valid_timestamps.length >= MAX_ALLOWED_REQUESTS) {
    return res.status(429).json({ msg: "Too Many Requests" });
  }

  // Store new timestamp and set expiry on the key
  await client.lPush(user_ip, String(current_timestamp));
  await client.expire(user_ip, WINDOW); // auto-delete key after 10 seconds

  return next();
};

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.status(200).json({
    msg: `Request received from ${req.socket.remoteAddress}`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
