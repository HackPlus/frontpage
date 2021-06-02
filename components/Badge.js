export default function Badge({ fillcolor, textcolor, children }) {
    return (
        <div className={`w-max rounded-md px-1 uppercase bg-${fillcolor} font-semibold text-sm text-${textcolor}`}>
            {children}
        </div>
    )
}