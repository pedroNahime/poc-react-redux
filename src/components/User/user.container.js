import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Creators as UserActions} from '../../actions/user'
import {User as UserComponent} from './user.component'

export const mapStateToProps = state => ({
    user: state.user.user,
    error: state.user.error
});

const mapDispatchToProps = dispatch => bindActionCreators({...UserActions}, dispatch);

export const User = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserComponent);