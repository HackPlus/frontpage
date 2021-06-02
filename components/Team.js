export default function Team({ src, name, role }) {
    return (
        <div className="border border-graylight flex flex-col justify-center">
            <div className="rounded-full overflow-hidden w-36 h-36">
                <img src={src} alt={name} />
            </div>
            <div className="flex flex-col">
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
}
