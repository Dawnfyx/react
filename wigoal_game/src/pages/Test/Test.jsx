import React from 'react';
import { connect } from 'react-redux';

const DetailsPage = (props) => {
    const { userInfo, } = props;



    return (
        <div>
            i am test page
            <br/>
            { JSON.stringify(userInfo) }
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