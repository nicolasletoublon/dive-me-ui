import styled from 'styled-components';
import {space, color, layout, flexbox} from 'styled-system';

export const Flex = styled.div`
    display: ${({inline}) => (inline ? 'inline-flex' : 'flex')};
    flex-direction: ${({col}) => col && 'column'};
    box-sizing: border-box;
    min-width: 0;

    ${space};
    ${color};
    ${layout};
    ${flexbox};
`;

Flex.displayName = 'Flex';

export const Relative = styled(Flex)`
    position: relative;
`;

Relative.displayName = 'Relative';

export const Absolute = styled(Flex)`
    position: absolute;
`;

Absolute.displayName = 'Absolute';
