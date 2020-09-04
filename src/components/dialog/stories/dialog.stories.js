/* eslint-disable react/prop-types,react/destructuring-assignment */
import React, {useState} from 'react';
// import css from '@styled-system/css';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Dialog, DialogContent, DialogFooter, DialogHeader} from '../dialog';
import {Absolute, Flex} from '../../atoms/flex';
import {POPPER_PLACEMENTS} from '../../popper/popper-placements';
import {Box} from '../../atoms/box';

export default {
    title: 'Components/Dialog',
    component: Dialog,
    argTypes: {
        shouldCloseOnClickOutside: {control: 'boolean'},
        shouldCloseOnScroll: {control: 'boolean'},
        hasTriggerWidth: {control: 'boolean'},
        offset: {control: {type: 'number', min: -100, max: 100}},
        placement: {control: {type: 'select', options: POPPER_PLACEMENTS}},
        triggerWidth: {control: {type: 'number', min: 0, max: 500}},
        dialogWidth: {control: {type: 'number', min: 0, max: 500}},
    },
};

const GlobalWrapper = styled(Absolute)`
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

export const Customized = (props) => {
    const [triggerRef, setTriggerRef] = useState();
    const [_isOpen, _setIsOpen] = useState(false);

    return (
        <GlobalWrapper>
            <DialogStoryWrapper>
                <Flex width={props.triggerWidth}>
                    <Button variant="contained" ref={setTriggerRef} onClick={() => _setIsOpen(!_isOpen)} fullWidth>
                        {_isOpen ? 'Hide the dialog' : 'Show the dialog'}
                    </Button>
                </Flex>

                <Dialog
                    width={props.dialogWidth}
                    shouldCloseOnClickOutside={props.shouldCloseOnClickOutside}
                    shouldCloseOnScroll={props.shouldCloseOnScroll}
                    hasTriggerWidth={props.hasTriggerWidth}
                    offset={props.offset}
                    placement={props.placement}
                    onClose={() => _setIsOpen(false)}
                    isOpen={_isOpen}
                    triggerElement={triggerRef}
                >
                    <DialogHeader>The dialog gives you the shadows and the background from the theme.</DialogHeader>
                    <DialogContent>
                        <Box height={2000}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </Box>
                    </DialogContent>
                    <DialogFooter>Footer</DialogFooter>
                </Dialog>
            </DialogStoryWrapper>
        </GlobalWrapper>
    );
};

Customized.args = {
    dialogWidth: 400,
    shouldCloseOnClickOutside: true,
    shouldCloseOnScroll: false,
    hasTriggerWidth: false,
    offset: 10,
    placement: 'bottom',
    triggerWidth: 300,
};
