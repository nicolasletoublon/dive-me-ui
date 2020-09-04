/* eslint-disable */
import {POPPER_EDGE_OFFSET, POPPER_TRIGGER_OFFSET} from './popper';

export const sameWidthModifier = (isEnabled) => ({
    name: 'sameWidth',
    enabled: isEnabled,
    phase: 'beforeWrite',
    requires: ['computeStyles'],
    fn: ({state}) => {
        state.styles.popper.width = `${state.rects.reference.width}px`;
    },
    effect: ({state}) => {
        state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    },
});

export const maxSizeModifier = {
    name: 'applyMaxSize',
    enabled: true,
    phase: 'beforeWrite',
    requires: ['maxSize'],
    fn({state}) {
        const {height} = state.modifiersData.maxSize;
        state.styles.popper.maxHeight = `${height - POPPER_EDGE_OFFSET}px`;
    },
};

export const offsetModifier = () => ({
    name: 'offset',
    options: {
        offset: [0, POPPER_TRIGGER_OFFSET],
    },
});

export const flipModifier = (isEnabled) => ({
    name: 'flip',
    enabled: isEnabled,
});
