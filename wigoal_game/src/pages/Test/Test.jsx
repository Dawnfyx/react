import React from 'react';
import { connect } from 'react-redux';

import './Test.less';

const DetailsPage = (props) => {
    const { userInfo, } = props;



    return (
        <div>
            <div className="testgrid">
                <div className="info_align"> info_align</div>
                <div className="info_container"> info_container</div>
                <div className="info_recommend"> info_recommend</div>
                <div className="info_banner"> info_banner</div>
            </div>
        </div>
    )
}

// export default DetailsPage;

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps)(DetailsPage);