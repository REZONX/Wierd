import { RadioChangeEvent } from 'antd'
import React from 'react'
import Radios from '../../components/radios'
import { useLists } from '../../context/ListsProvider'
import {ListsRadios} from './config'

interface ListsRadioProps {

}
const ListsRadio = (props:ListsRadioProps) => {
    const {} = props
    const {
        currentList,
        setCurrentList
    } = useLists()
    console.log(currentList)
    const handleChange = (e:RadioChangeEvent) => {
        e.preventDefault()
        setCurrentList(e.target.value)
    }
    return (
        <Radios
            defaultValue={currentList}
            handleChange={handleChange}
            radioProps={ListsRadios}
        />
    )
}

export default ListsRadio