import React from 'react'
import loading from './loading.gif'

const spinner =()=> {

    return (
      <div>
        <div className="text-center">
            <img src={loading} alt="" />
        </div>
      </div>
    )
}

export default spinner