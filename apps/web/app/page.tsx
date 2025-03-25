
import {client} from "@repo/db/Client"

export default async function Home() {

  const user =await client.user.findFirst();


  return (
    <div >
      {user?.username}
      {user?.password}
    </div>
  );
}
