import React from 'react'
import GridLoader from 'react-spinners/GridLoader'

const Loading = () => {
    return (
        <div className="loading">
            <GridLoader color="#adadad" size={100}/>
        </div>
    )
}

export default Loading

