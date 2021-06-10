import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <main className="">
        <section className="bg-indigo bg-opacity-80 min-h-screen py-10">
          <div className="flex flex-col justify-center text-center text-graylight">
            <img
              src="/logo-white.svg"
              alt="Hack+ Logo white"
              className="mb-24"
            />
            <h1 className="font-medium text-7xl text-white">Whoops.</h1>
            <h2>That page doesn&apos;t exist. Yet.</h2>
            <p className="py-5">
              We&apos;ve got a ton of other cool stuff to look at though. Click
              that beautiful button to explore Hack+.
            </p>
            <Link href="/">
              <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black">
                <div className="rounded-lg bg-green py-3 px-5 w-72 mx-auto">
                  Country roads... Take me home...
                </div>
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
