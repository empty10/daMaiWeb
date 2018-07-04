import React from 'react';
import {connect} from 'react-redux';

class ShowsTime extends React.Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return <div className='panel'>
            <div className='panel-body'>
                时间
                <div className='dateTime'>
                    11.04周日
                </div>
                场次
                <div className='showTime'>
                    20:00
                </div>

            </div>
            <div className='panel-footer'>
                立即购买
            </div>

        </div>;
    }
}

export default connect( )(ShowsTime);