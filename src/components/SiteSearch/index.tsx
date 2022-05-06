import React from 'react'
import { Input,TreeSelect} from "antd"
import { container } from "./style.css"

const {Search} = Input
const SiteSearch = () => {
    const [value,setValue] = React.useState("")
    React.useEffect(()=>{
        
    },[])
    const handleSearch = (value:string) => {
        setValue(value)
    }
    return (
        <div
            className={container}
        >
            <TreeSelect
                style={{"width":"250px"}}
                showSearch
                onSearch={handleSearch}
                treeNodeFilterProp={"value"}
                filterTreeNode
            />
        </div>
    )
}

export default SiteSearch