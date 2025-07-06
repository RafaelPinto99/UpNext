import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <>
      <div className="flex flex-col justify-center items-center py-7 px-20">
        <section className="flex flex-col justify-center items-center w-7xl">
          <div className="margin-bottom-default">
            <div>
              <h1 className="text-7xl text-center font-bold margin-bottom-default">
                Welcome to UpNext
              </h1>
              <p className="text-center text-4xl margin-bottom-default">
                Track the companies you're interested in. <br />
                Organize faster. Save time.
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 text-white">
              <Link href="/signup" className="orange-btn">
                Sign Up for Free
              </Link>
              <Link href="/download" className="green-btn">
                Download Extension
              </Link>
            </div>
          </div>

          <img src="/test.jpg" alt="" />
        </section>

        <section id="how-it-works" className="p-8 bg-gray-100">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <p>Describe how the system works...</p>
        </section>

        <section id="contacts" className="p-8 bg-gray-200">
          <h2 className="text-2xl font-bold">Contacts</h2>
          <p>Email, social media, etc...</p>
        </section>
      </div>
    </>
  );
}
