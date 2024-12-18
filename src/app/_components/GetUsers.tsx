import { honoClient } from "../some-client";

export async function GetUsers() {
  const response = await honoClient.api["users"].$get();
  const data = await response.json();

  return (
    <div>
      <h1>Users</h1>
      {data.map((user: { id: string; name: string }) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
