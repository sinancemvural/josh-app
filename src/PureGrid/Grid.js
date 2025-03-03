import React from 'react';
import {range} from './utils';

function Grid({numRows,numCols}){
    return(
        <div>
            {range(numRows).map((rowIndex) => (
                <div key={rowIndex} className='row'>
                    {range(numCols).map((colIndex) => (
                        <div key={colIndex} className='cell' />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default React.memo(Grid);