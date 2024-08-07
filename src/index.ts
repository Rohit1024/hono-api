import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text(`Hello Hono ! \n`));

app.get("/posts", (c) =>
  c.json([
    { id: 1, title: "First" },
    { id: 2, title: "Second" },
  ])
);

serve({
  fetch: app.fetch,
  port: 8080,
});
