/* eslint-disable consistent-return */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {usePopper} from 'react-popper';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import maxSize from 'popper-max-size-modifier';
import {POPPER_PLACEMENTS} from './popper-placements';
import {Flex} from '../atoms/flex';
import {flipModifier, maxSizeModifier, offsetModifier, sameWidthModifier} from './popper-modifiers';

export const POPPER_EDGE_OFFSET = 20;
export const POPPER_TRIGGER_OFFSET = 10;

const PopperWrapper = styled(Flex)`
    box-sizing: border-box;
    overflow-y: auto;

    /* Allow to hide the popper while the reference is not visible */
    &[data-popper-reference-hidden='true'] {
        visibility: hidden;
        pointer-events: none;
    }
`;

function isAncestor(element, parent) {
    if (element === parent) {
        return true;
    }
    while (element.parentNode) {
        if (element.parentNode === parent) {
            return true;
        }

        element = element.parentNode; // eslint-disable-line
    }
    return false;
}

export const Popper = ({
    placement,
    children,
    offset,
    isOpen,
    triggerElement,
    onClickOutside,
    shouldCloseOnClickOutside,
    shouldCloseOnScroll,
    hasTriggerWidth,
    onClose,
    canFlip,
    ...rest
}) => {
    const [popperElement, setPopperElement] = useState();
    let hasScrolled = false;

    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    // const shouldCheck = !!popperElement && isOpen === true;
    // useOutsideClick([popperElement, triggerElement], handleClose, shouldCheck);

    /* Handle the clickOutside events */
    useEffect(() => {
        if (!shouldCloseOnClickOutside) return;

        if (isOpen && popperElement && triggerElement) {
            const onClickDocument = (evt) => {
                // If the target is a children of the popperElement or is the trigger, we do nothing.
                if (isAncestor(evt.target, popperElement) || triggerElement.contains(evt.target)) {
                    // Do nothing
                } else {
                    if (shouldCloseOnClickOutside) {
                        handleClose();
                    }

                    onClickOutside(evt);
                }
            };

            document.body.addEventListener('click', onClickDocument);
            return () => {
                document.body.removeEventListener('click', onClickDocument);
            };
        }
    }, [popperElement, triggerElement, isOpen, onClickOutside, shouldCloseOnClickOutside]);

    /* Handle the scroll events */
    useEffect(() => {
        if (!shouldCloseOnScroll) return;

        if (isOpen) {
            const onScrollDocument = () => {
                if (!hasScrolled) {
                    window.requestAnimationFrame(() => {
                        handleClose();
                        hasScrolled = false;
                    });

                    hasScrolled = true;
                }
            };

            document.addEventListener('scroll', onScrollDocument);
            return () => {
                document.removeEventListener('scroll', onScrollDocument);
            };
        }

        return () => {};
    }, [isOpen, shouldCloseOnScroll, handleClose]);

    const modifiers = useMemo(
        () => [
            maxSize,
            maxSizeModifier,
            sameWidthModifier(hasTriggerWidth),
            offsetModifier(offset),
            flipModifier(canFlip),
        ],
        [offset, hasTriggerWidth, canFlip]
    );

    const {styles, attributes} = usePopper(triggerElement, popperElement, {
        placement,
        modifiers,
    });

    const {popper: popperStyles} = styles;
    const {popper: popperAttrs} = attributes;

    return isOpen
        ? ReactDOM.createPortal(
              <PopperWrapper {...rest} ref={setPopperElement} style={popperStyles} {...popperAttrs}>
                  <Flex flex={1} col>
                      {children}
                  </Flex>
              </PopperWrapper>,
              document.body
          )
        : null;
};

Popper.displayName = 'Popper';

Popper.defaultProps = {
    isOpen: false,
    offset: POPPER_TRIGGER_OFFSET,
    placement: POPPER_PLACEMENTS.bottom,
    triggerElement: null,
    onClickOutside: (f) => f,
    onClose: (f) => f,
    shouldCloseOnClickOutside: true,
    shouldCloseOnScroll: false,
    hasTriggerWidth: false,
    canFlip: true,
};

Popper.propTypes = {
    isOpen: PropTypes.bool,
    canFlip: PropTypes.bool,
    shouldCloseOnClickOutside: PropTypes.bool,
    shouldCloseOnScroll: PropTypes.bool,
    hasTriggerWidth: PropTypes.bool,
    offset: PropTypes.number,
    placement: PropTypes.oneOf(Object.keys(POPPER_PLACEMENTS)),
    triggerElement: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.instanceOf(Element)})]),
    onClickOutside: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
};
