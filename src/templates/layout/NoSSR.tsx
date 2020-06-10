import dynamic from 'next/dynamic'
import React, {FunctionComponent} from 'react'

const NoSSR: FunctionComponent = props => (
    <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false
})