import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();

  if(!session){
    return (
      <div className="bg-blue-600 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={() => signIn('google') } className="bg-white p-2 px-4 rounded-md">Iniciar con Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <h3>Iniciaste sesión {session.user.email}</h3>
      </div>
    </div>
  );
}