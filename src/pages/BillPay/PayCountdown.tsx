import React from 'react'
import Countdown from 'antd/lib/statistic/Countdown'
import moment from 'moment'

const PayCountdown = () => {
    const deadline = moment().add(15,"minute").valueOf()
    const container = React.useRef(deadline)
    return (
        <Countdown
            value={container.current}
        />
    )
}

export default PayCountdown