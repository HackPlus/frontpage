import Link from "next/link";

export default function Card() {
  return (
    <div className="border border-opacity-25 border-gray rounded-xl p-6">
      <img src="" alt="icon" />
      <h3>Events+</h3>
      <p>Accepting Applications</p>
      <p>
        Launch events, like hackathons or conferences, using our comprehensive
        platform. We`&#39;`ll provide legal backend, banking services, powerful
        equipment, and more.
      </p>
      <Link href="/">Learn more</Link>
    </div>
  );
}
