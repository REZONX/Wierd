import { useHttp } from "../../utils/http"
import ModuleListUI,{ModuleListUIProps}from "./ModuleListUI"

export interface ModuleListProps extends ModuleListUIProps {

}
const ModuleList = (props:ModuleListProps) => {
    const client = useHttp('http:xxx')
    
    return (
        <ModuleListUI
            {...props}
        />
    )
}
export default ModuleList