import { Card } from "antd"

interface MovieCardProps {
    
}
const MovieCard = (props:MovieCardProps) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default MovieCard