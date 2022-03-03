import { ListsModuleUIContainerS, ListsModuleUIDescContainerS, ListsModuleUIImageContainerS, ListsModuleUIImageS, ListsModuleUINumS } from "./style.css"

export interface ListsModuleUIProps {

}
const ListsModuleUI = (props:ListsModuleUIProps) => {
    return (
        <div
            className={ListsModuleUIContainerS}
        >
            <div className={ListsModuleUINumS}>
                1
            </div>
            <div className={ListsModuleUIImageContainerS}>
                <img 
                    className={ListsModuleUIImageS}
                    src="https://tse1-mm.cn.bing.net/th/id/R-C.ffeddf064643593393e0f9075a4d98bd?rik=UsIrzvUBJn6O0g&riu=http%3a%2f%2fimg.sj33.cn%2fuploads%2fallimg%2f201410%2f1022344335-23.jpg&ehk=NvbP1K5BO7n%2fW08fbNAE5IJn9%2bi4GcFYR4voTVm8ZsA%3d&risl=&pid=ImgRaw&r=0" alt="" 
                />
            </div>
            <div className={ListsModuleUIDescContainerS}>
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </div>
        </div>
    )
}

export default ListsModuleUI