import { honoClient } from "../some-client";

export async function GetHello() {
    const response = await honoClient.api["hello"].$get()
    const data = await response.json()
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}