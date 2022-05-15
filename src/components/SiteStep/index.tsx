import { Steps,StepsProps } from 'antd'
import React from 'react'

import "antd/lib/steps/style"
import { steps } from './style.css'

const {Step} = Steps

interface StepProps {
    title:string
    desc?:string
    incon?:React.ReactNode
}
type IStepsProps = Array<StepProps>
interface SiteStepsProps extends Partial<StepsProps> {
    stepsProps:IStepsProps
}

const SiteSteps = (props:SiteStepsProps) => {
    const {
        stepsProps,
    } = props
    return (
        <Steps
            className={steps}
            {...props}
        >
            {
                stepsProps.map(item=> {
                    return (
                        <Step
                            style={{
                                
                            }}
                            title={item.title}
                            description={item.desc}
                            icon={item.incon}
                        />
                    )
                })
            }
        </Steps>
    )
}

export default SiteSteps