import { honoClient } from "../some-client";

export async function GetUser() {
    const response = await honoClient.api["users"][":id"].$get({param: {id: "1"}});
    const data = await response.json();

    return (
        <div>
            <h1>User</h1>
            <p>{'name' in data ? data.name : data.message}</p>
        </div>
    );
}