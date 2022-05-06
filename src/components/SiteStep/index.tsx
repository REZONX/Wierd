import { Steps,StepsProps } from 'antd'
import React from 'react'

import "antd/lib/steps/style"

const {Step} = Steps

interface StepProps {
    title:string
    desc?:string
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
            {...props}
        >
            {
                stepsProps.map(item=> {
                    return (
                        <Step
                            title={item.title}
                            description={item.desc}
                        />
                    )
                })
            }
        </Steps>
    )
}

export default SiteSteps