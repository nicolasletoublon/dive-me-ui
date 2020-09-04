/* eslint-disable react/prop-types,react/destructuring-assignment */
import React, {useState} from 'react';
// import css from '@styled-system/css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Absolute, Flex} from '../../atoms/flex';
import {Popper} from '../popper';
import {DialogContent, DialogFooter, DialogHeader} from '../../dialog/dialog';
import {POPPER_PLACEMENTS} from '../popper-placements';

export default {
    title: 'Components/Popper',
    component: Popper,
    argTypes: {
        shouldCloseOnClickOutside: {control: 'boolean'},
        shouldCloseOnScroll: {control: 'boolean'},
        hasTriggerWidth: {control: 'boolean'},
        offset: {control: {type: 'number', min: -100, max: 100}},
        placement: {control: {type: 'select', options: POPPER_PLACEMENTS}},
        triggerWidth: {control: {type: 'number', min: 0, max: 500}},
    },
};

const PopperStoryWrapper = styled(Absolute)`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const DialogStoryWrapper = styled(Flex)`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const StyledButton = styled(Button)`
    background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
        background-color: #5469d4;
    }
`;

export const Customized = (props) => {
    const [triggerRef, setTriggerRef] = useState();
    const [_isOpen, _setIsOpen] = useState(false);

    return (
        <PopperStoryWrapper>
            <DialogStoryWrapper>
                <Flex width={props.triggerWidth}>
                    <StyledButton
                        variant="contained"
                        ref={setTriggerRef}
                        onClick={() => _setIsOpen(!_isOpen)}
                        fullWidth
                    >
                        Controlled with external button
                    </StyledButton>
                </Flex>

                <Popper
                    shouldCloseOnClickOutside={props.shouldCloseOnClickOutside}
                    shouldCloseOnScroll={props.shouldCloseOnScroll}
                    hasTriggerWidth={props.hasTriggerWidth}
                    offset={props.offset}
                    placement={props.placement}
                    onClose={() => _setIsOpen(false)}
                    isOpen={_isOpen}
                    triggerElement={triggerRef}
                >
                    <Flex col width={props.hasTriggerWidth ? 'unset' : 500} bg="lightcoral">
                        <DialogHeader>A nice header</DialogHeader>
                        <DialogContent height={1000}>
                            wrapper Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </DialogContent>
                        <DialogFooter>Footer</DialogFooter>
                    </Flex>
                </Popper>
            </DialogStoryWrapper>
        </PopperStoryWrapper>
    );
};

Customized.args = {
    shouldCloseOnClickOutside: true,
    shouldCloseOnScroll: false,
    hasTriggerWidth: false,
    offset: 10,
    placement: 'bottom',
    triggerWidth: 300,
};
