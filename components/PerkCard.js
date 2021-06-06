export default function Perk({ heading, description, children }) {
    return (
        <div className="border-2 border-graylight bg-white rounded-xl px-3 py-4 py-auto">
            <div className="flex flex-row space-x-3 items-center">
                {children}
                <div className="flex flex-col">
                    <p className="text-xl">{heading}</p>
                    <p className="text-gray text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}