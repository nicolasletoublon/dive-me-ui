import styled from 'styled-components';
import {space, color, layout} from 'styled-system';

export const Box = styled.div`
    display: ${({inline}) => (inline ? 'inline-block' : 'block')};
    box-sizing: border-box;
    min-width: 0;

    ${space};
    ${color};
    ${layout};
`;

Box.displayName = 'Box';
