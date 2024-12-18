export const users = [
    {id: "1", name: "user1"},
    {id: "2", name: "user2"},
    {id: "3", name: "user3"},
]

export async function getUsers() {
    return users;
}

export async function getUser(id: string) {
    return users.find(u => u.id === id);
}