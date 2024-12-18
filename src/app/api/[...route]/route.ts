import { getUser, getUsers } from "@/data/users";
import { Hono } from "hono";

const app = new Hono()

.basePath("/api")

.get("/hello", (c) => c.json({ message: "Hello, Hono in Nextjs!" }))

.get("/users", async (c) => {
    const users = await getUsers();
      return c.json(users);
  }
)

.get("/users/:id", async (c) => {
    const id = c.req.param("id");
    const user = await getUser(id);
    if (!user) {
      return c.json({ message: "User not found" }, 404);
    }
      return c.json(user);
  }
);

export const GET = app.fetch;
export const POST = app.fetch;
export const PUT = app.fetch;
export const DELETE = app.fetch;

export type HonoAppType = typeof app;
