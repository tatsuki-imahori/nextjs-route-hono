import { hc } from "hono/client";
import { type HonoAppType } from "./api/[...route]/route";

export const honoClient = hc<HonoAppType>("/"); // ローカルの場合は"http://localhost:3000"