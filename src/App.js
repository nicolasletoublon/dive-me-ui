import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Dialog, DialogContent, DialogFooter, DialogHeader} from './components/dialog/dialog';
import {Absolute, Flex} from './components/atoms/flex';
import {Popper} from './components/popper/popper';

const StoryWrapper = styled(Absolute)`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4000px;
`;

const DialogStoryWrapper = styled(Flex)`
    flex: 1;
    width: 200px;
    align-items: center;
    flex-direction: column;
    margin-top: 700px;
`;

const PopperBox = styled(Flex)`
    width: 400px;
    height: 2000px;
    background-color: lightcoral;
`;

const StyledButton = styled(Button)`
    /*background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;

    &:hover {
        background-color: #5469d4;
    }*/
`;

function App() {
    const [placement, setPlacement] = useState('bottom');
    const [_isOpen, _setIsOpen] = useState(false);
    const [controlledTrigger, setControlledTrigger] = useState();

    return (
        <div className="App">
            <StoryWrapper>
                <DialogStoryWrapper>
                    <Flex m={111}>
                        <StyledButton
                            ref={setControlledTrigger}
                            variant="contained"
                            onClick={() => _setIsOpen(!_isOpen)}
                        >
                            Uncontrolled with internal button
                        </StyledButton>
                    </Flex>
                    {/* <Flex mt="50px">
                        <button onClick={() => _setIsOpen(!_isOpen)} ref={setTriggerRef2}>
                            Reference
                        </button>
                    </Flex>

                    {_isOpen}

                    <Dialog
                        triggerRef={triggerRef2}
                        placement={placement}
                        isOpen={_isOpen}
                        isControlled
                        bg="red"
                        p="40px"
                    >
                        <DialogHeader>Eternally controlled</DialogHeader>
                    </Dialog> */}
                    {/* <button onClick={() => _setIsOpen(!_isOpen)} ref={setControlledTrigger1}>
                        Controlled with external button
                    </button>
                    <Popper isOpen={_isOpen} triggerRef={controlledTrigger1} placement={placement} bg="pink" p="40px">
                        <DialogHeader>Controlled with external button</DialogHeader>
                    </Popper> */}
                    {/*      <Popper
                        isControlled
                        isOpen={_isOpen2}
                        triggerElement={
                            <button onClick={() => _setIsOpen2(!_isOpen2)}>Controlled with internal button</button>
                        }
                        triggerRef={controlledTrigger}
                        placement={placement}
                        bg="pink"
                        p="40px"
                    >
                        <DialogHeader>Controlled with internal button</DialogHeader>
                    </Popper> */}

                    <Dialog isOpen={_isOpen} triggerElement={controlledTrigger} placement="bottom">
                        <DialogHeader>Header</DialogHeader>
                        <DialogContent height={1000}>Content</DialogContent>
                        <DialogFooter>Footer</DialogFooter>
                    </Dialog>

                    {/* <Popper
                        triggerElement={
                            <button ref={setUncontrolledTrigger1}>Uncontrolled with a triggerElement</button>
                        }
                        triggerRef={uncontrolledTrigger1}
                        placement={placement}
                        bg="pink"
                        p="40px"
                    >
                        <DialogHeader>Uncontrolled with a triggerElement</DialogHeader>
                    </Popper> */}
                </DialogStoryWrapper>
            </StoryWrapper>
        </div>
    );
}

export default App;
