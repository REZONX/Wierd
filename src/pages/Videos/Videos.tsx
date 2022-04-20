import React from 'react'
import { Card, Radio,RadioChangeEvent} from "antd"

const Videos = () => {
    const [isVisible,setIsVisible] = React.useState(true)
    const handleRadioChange = (evt:RadioChangeEvent) => {
        setIsVisible(evt.target.value)
    }
    return (
        <div>
            <Card>
                <Radio.Group
                    onChange={handleRadioChange}
                    defaultValue={isVisible}
                >
                    <Radio
                        value={true}
                        // defaultChecked={true}
                    >是</Radio>
                    <Radio
                        value={false}
                    >否</Radio>
                </Radio.Group>
            </Card>
        </div>
    )
}
export default Videos