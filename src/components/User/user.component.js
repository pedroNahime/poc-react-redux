import PropTypes from 'prop-types'
import {useEffect} from "react";

export const User = (props) => {
    useEffect(() => {
        props.getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return props.user.name ?  props.user.name.first : ''
};

User.propTypes = {
  getUser: PropTypes.any,
  user: PropTypes.any
};