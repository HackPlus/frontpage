/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";

const CustomLink = (props) => {
    const { href } = props;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        );
    }

    return (
        <a target="_blank" className="font-semibold" rel="noopener noreferrer" {...props}>
            {props.children}
        </a>
    );
};

const CustomHeader = (props) => {
    return (
        <h1 className="text-5xl font-semibold leading-loose" {...props}>
            {props.children}
        </h1>
    );
};

const CustomSubheading = (props) => {
    return (
        <h2 className="text-3xl font-medium leading-loose" {...props}>
            {props.children}
        </h2>
    );
};

const CustomUnorderedList = (props) => {
    return (
        <ul className="list-disc list-inside" {...props}>
            {props.children}
        </ul>
    );
};

const CustomTableHeader = (props) => {
    return (
        <th className="p-2" {...props}>
            {props.children}
        </th>
    );
}

const CustomTableCell = (props) => {
    return (
        <td className="p-2" {...props}>
            {props.children}
        </td>
    );
}

const MDXComponents = {
    h1: CustomHeader,
    h2: CustomSubheading,
    a: CustomLink,
    ul: CustomUnorderedList,
    th: CustomTableHeader,
    td: CustomTableCell
};

export default MDXComponents;
