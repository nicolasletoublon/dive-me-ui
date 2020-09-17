/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {AutoSizer, List} from 'react-virtualized';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Flex} from '../atoms/flex';
import debounce from '../../helpers/debounce';
import {POPPER_EDGE_OFFSET, POPPER_TRIGGER_OFFSET} from '../popper/popper';

const ListWrapper = styled(Flex).attrs(({height}) => ({
    style: {
        height,
    },
}))`
    flex: 1;
`;

export const VirtualizedList = ({items, itemRenderer, rowHeight, triggerRef, offsets, placement}) => {
    const [calculatedHeight, setCalculatedHeight] = useState(0);

    const calculateListHeight = () => {
        // If placement is bottom, the available space is under the trigger
        let baseHeight = window.innerHeight - triggerRef.getBoundingClientRect().bottom;

        // If placement is top, the available space is above the trigger
        if (placement === 'top') {
            baseHeight = triggerRef.getBoundingClientRect().top;
        }

        if (triggerRef) {
            const optionsHeight = items.length * rowHeight;
            // const defaultHeight = optionsHeight > listHeight ? optionsHeight : listHeight;
            const maxListHeight = baseHeight - offsets - POPPER_EDGE_OFFSET - POPPER_TRIGGER_OFFSET;

            setCalculatedHeight(optionsHeight > maxListHeight ? maxListHeight : +optionsHeight);
        }
    };

    // const debouncedCalculateListHeight = debounce(calculateListHeight, 30);

    const enhanceItemRenderer = (args) => {
        return itemRenderer({...args, data: items[args.index]});
    };

    useEffect(() => {
        calculateListHeight();
        window.addEventListener('resize', calculateListHeight, true);
        window.addEventListener('scroll', calculateListHeight, true);

        return () => {
            window.removeEventListener('resize', calculateListHeight, true);
            window.removeEventListener('scroll', calculateListHeight, true);
        };
    }, []);

    // todo remove the focus : ReactVirtualized__Grid ReactVirtualized__List

    console.log(calculatedHeight);

    return (
        <ListWrapper height={calculatedHeight}>
            <AutoSizer>
                {({width, height}) => {
                    return (
                        <List
                            height={height}
                            width={width}
                            rowCount={items.length}
                            rowHeight={rowHeight}
                            rowRenderer={enhanceItemRenderer}
                        />
                    );
                }}
            </AutoSizer>
        </ListWrapper>
    );
};

VirtualizedList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    itemRenderer: PropTypes.func.isRequired,
    rowHeight: PropTypes.number.isRequired,
    listHeight: PropTypes.number,
};
