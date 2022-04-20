export interface ILinkProps {
    path:string
    content:string
}

type LinksProps  =Array<ILinkProps>

export const navConfig:LinksProps = [
    {
        path:"/movies",
        content: "movies"
    },
    {
        path:"/cinemas",
        content:"cinemas",
    },
    {
        path:"/lists",
        content: "lists"
    }
]