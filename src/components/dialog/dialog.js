import styled from 'styled-components';
import {space, color, flexbox} from 'styled-system';
import React from 'react';
import {Flex} from '../atoms/flex';
import {Popper} from '../popper/popper';

// TODO: Has border
export const DialogHeader = styled(Flex)`
    padding: 20px;

    ${space};
`;

DialogHeader.displayName = 'DialogHeader';

export const DialogContent = styled(Flex)`
    padding: 20px;
    flex: 1;
    overflow-y: auto;

    ${space};
    ${flexbox};
`;
DialogContent.displayName = 'DialogContent';

export const DialogFooter = styled(Flex)`
    padding: 20px;

    ${space};
`;
DialogFooter.displayName = 'DialogFooter';

export const StyledPopper = styled(Popper)`
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: white;

    ${space};
    ${color};
    ${flexbox};
`;

StyledPopper.displayName = 'StyledPopper';

const DialogContentWrapper = styled(Flex)`
    flex-direction: column;
    height: 100%;
`;

DialogContentWrapper.displayName = 'DialogContentWrapper';

export const Dialog = ({children, ...rest}) => {
    return (
        <StyledPopper {...rest}>
            <DialogContentWrapper>{children}</DialogContentWrapper>
        </StyledPopper>
    );
};

Dialog.displayName = 'Dialog';
