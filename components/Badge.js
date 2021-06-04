export default function Badge({ fillcolor, textcolor, children }) {
    return (
        <div className={`w-max rounded-md px-2 py-1 uppercase bg-${fillcolor} font-semibold text-xs text-${textcolor}`}>
            {children}
        </div>
    )
}