import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Bienvenido,<b> {session?.user?.name}</b>
        </h2>
        <picture className="flex bg-gray-300 gap-1 text-black rounded-md overflow-hidden">
          <img
            src={session?.user?.image}
            alt={session?.user?.name}
            className="w-6 h-6"
          ></img>
          <span className="px-2">{session?.user?.name}</span>
        </picture>
      </div>
    </Layout>
  );
}
