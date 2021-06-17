export default function CarouselCard() {
  return (
    <div className="border-2 rounded-xl p-6 border-graylight w-9/12">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-1">
          <img
            src="/scott.png"
            alt="Picture of a person"
            className="w-48 rounded-full border-graylight border-4"
          />
        </div>
        <div className="col-span-5">
          <h4 className="text-purple text-2xl font-medium">
            Garuda Hacks wouldn&apos;t have been possible without the Hack+
            infrastructure that abstracted away the complexity of raising
            sponsorship and making vendor payments.
          </h4>
          <p className="text-gray">
            Garuda Hacks was organized at the very last moment with only 2.5
            months left in our hands, and it wouldn&apos;t have been possible
            without the Hack+ infrastructure that abstracted away the complexity
            of raising sponsorship and making vendor payments. As a result, we
            were able to put more energy into logistics, marketing, and hacker
            experience, making Garuda Hacks Indonesia&apos;s largest hackathon,
            with 2500+ participants, and receiving the support of
            Indonesia&apos;s Ministry of Tourism and Creative Economy.
          </p>
          <div className="pt-4">
            <p className="text-black text-2xl font-medium">
              Scott Moses Sunarto
            </p>
            <p className="text-gray">
              Managing Director,{" "}
              <span className="text-purple font-medium">Garuda Hacks</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
// temporary i think
