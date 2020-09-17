/* eslint-disable react/prop-types,react/destructuring-assignment */
import 'react-virtualized/styles.css';
import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Dialog, DialogContent, DialogFooter, DialogHeader} from '../dialog';
import {Absolute, Flex} from '../../atoms/flex';
import {POPPER_PLACEMENTS} from '../../popper/popper-placements';
import {VirtualizedList} from '../../virtual-list/virtualized-list';

export default {
    title: 'Components/Virtualized list',
    component: Dialog,
    argTypes: {
        shouldCloseOnClickOutside: {control: 'boolean'},
        shouldCloseOnScroll: {control: 'boolean'},
        hasTriggerWidth: {control: 'boolean'},
        canFlip: {control: 'boolean'},
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
    height: 3000px;
`;

const DialogStoryWrapper = styled(Flex)`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Row = styled(Flex)`
    cursor: pointer;
    &:hover {
        background-color: aliceblue;
    }
`;

export const ListExample = (props) => {
    const [triggerRef, setTriggerRef] = useState();
    // const [viewportRef, setViewportRef] = useState();
    const [_isOpen, _setIsOpen] = useState(false);

    const itemRenderer = (args) => {
        return (
            <Row px={5} py={1} alignItems="center" key={args.key} style={args.style}>
                {args.data.id}
            </Row>
        );
    };

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
                    canFlip={props.canFlip}
                >
                    <DialogHeader>The dialog gives you the shadows and the background from the theme.</DialogHeader>
                    <DialogContent px={0}>
                        <VirtualizedList
                            placement={props.placement}
                            offsets={137}
                            triggerRef={triggerRef}
                            items={props.visibleOptions}
                            itemRenderer={itemRenderer}
                            rowHeight={40}
                        />
                    </DialogContent>
                    <DialogFooter>Footer</DialogFooter>
                </Dialog>
            </DialogStoryWrapper>
        </GlobalWrapper>
    );
};

ListExample.args = {
    visibleOptions: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 21},
        {id: 31},
        {id: 41},
        {id: 51},
        {id: 61},
        {id: 71},
        {id: 81},
        {id: 91},
        {id: 101},
        {id: 12},
        {id: 22},
        {id: 32},
        {id: 42},
        {id: 52},
        {id: 62},
        {id: 72},
        {id: 82},
        {id: 92},
        {id: 102},
    ],
    optionHeight: 36,
    height: 60,
    dialogWidth: 400,
    shouldCloseOnClickOutside: true,
    shouldCloseOnScroll: false,
    hasTriggerWidth: false,
    canFlip: false,
    offset: 10,
    placement: 'top',
    triggerWidth: 300,
};
