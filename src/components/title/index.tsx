import { container, content, front } from "./style.css"

interface TitleProps {
    name:string
}
const Title = (props:TitleProps) => {
    const {
        name
    } = props
    return(
        <header
            className={container}
        >
            <div
                className={front}
            />
            <div
                className={content}
            >
                {name}
            </div>
        </header>
    )
}

export default Title