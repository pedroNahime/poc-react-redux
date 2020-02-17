import React from 'react'
import {Creators as UserActions} from "../../../store/ducks/User/user";
import {mapDispatchToProps} from "../user.container";

describe('User Container', () => {
    describe('#mapDispatchToProps', () => {
        let dispach;
        let props;

        beforeEach(()=> {
           dispach = jest.fn();
           props = mapDispatchToProps(dispach)
        });
        test('binds actions', () => {
            props.getUser();
            expect(dispach).toHaveBeenCalledWith(UserActions.getUser())
        });
    });
});