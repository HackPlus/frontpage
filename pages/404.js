import Link from "next/link";
import Image from "next/image";
import logoWhite from "../public/img/logos/logo-white.svg";
import BackgroundSvgs from "../components/BackgroundSvgs";

export default function Custom404() {
  return (
    <div>
      <main>
        <section className="bg-purple min-h-screen py-10 px-10 sm:px-24 overflow-x-hidden relative">
          <BackgroundSvgs />
          <div className="flex flex-col relative justify-center text-center text-white">
            <Link href="/">
              <a className="w-max mx-auto my-2">
                <Image
                  src={logoWhite}
                  alt="Hack+ Logo white"
                  height={35}
                  width={119.47}
                />
              </a>
            </Link>
            <div className="pt-8 lg:pt-32 pb-32">
              <h1 className="font-medium text-7xl md:text-8xl">Whoops.</h1>
              <h2 className="font-medium">
                That page doesn&apos;t exist. Yet.
              </h2>
              <p className="py-5 text-lg lg:text-xl">
                We&apos;ve got a ton of other cool stuff to look at though.
                Click that beautiful button to explore Hack+.
              </p>
              <Link href="/">
                <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-black">
                  <div className="mt-4 md:mt-8 rounded-lg bg-green py-4 px-9 w-max mx-auto text-lg lg:text-xl font-medium">
                    Country roads... Take me home...
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
