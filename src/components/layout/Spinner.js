import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => 
    <Fragment>
        <img src={spinner} ale='loading...' style={{ width:'200px', margin:'auto', display:'block' }} />
    </Fragment>


export default Spinner
