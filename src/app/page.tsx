import { GetHello } from "./_components/GetHello";
import { GetUser } from "./_components/GetUser";
import { GetUsers } from "./_components/GetUsers";

export default function Home() {
  return (
    <main >
      <GetHello />
      <GetUsers />
      <GetUser />
    </main>
  );
}
