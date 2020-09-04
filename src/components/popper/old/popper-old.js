import React, {useEffect, useState} from 'react';
import {usePopper} from 'react-popper';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {POPPER_PLACEMENTS} from '../popper-placements';

const PopperWrapper = styled.div`
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

/**
 * 1. Controlled - isOpen is handled externally
 *   - Internal trigger: triggerElement AND triggerRef required. isControlled = true is required
 *   - External trigger: triggerRef required. isControlled = true is required
 * 2. Uncontrolled - isOpen is handled by the Popper
 *   - Internal trigger ONLY: triggerElement AND triggerRef required.
 */
export const Popper = ({
    placement,
    children,
    offset,
    isOpen: externalIsOpen,
    triggerRef,
    triggerElement,
    onClickOutside,
}) => {
    const [referenceElement, setReferenceElement] = useState();
    const [popperElement, setPopperElement] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const isControlled = typeof externalIsOpen === 'boolean';

    console.log('outside', popperElement);

    /* const onClickDocument = (evt) => {
        console.log(popperElement);

        // If the target is a children of the popperElement or is the trigger, we do nothing.
        if (isAncestor(evt.target, popperElement) || (triggerRef && triggerRef.contains(evt.target))) {
        } else {
            onClickOutside(evt);
        }
    }; */

    const onClickDocument = (evt) => {
        console.log({popperElement, triggerRef});

        // If the target is a children of the popperElement or is the trigger, we do nothing.
        if (isAncestor(evt.target, popperElement) || (triggerRef && triggerRef.contains(evt.target))) {
        } else {
            onClickOutside(evt);
        }
    };

    useEffect(() => {
        if (popperElement && onClickOutside) {
            document.body.addEventListener('click', onClickDocument);
        }

        return () => {
            console.log('unmount');
            document.body.removeEventListener('click', onClickDocument);
        };
    }, [popperElement]);

    useEffect(() => {
        setIsOpen(!!externalIsOpen);
    }, [externalIsOpen]);

    useEffect(() => {
        setReferenceElement(triggerRef);
    }, [triggerRef]);

    const handleReferenceClick = () => {
        setIsOpen(!isOpen);
    };

    const offsetModifier = {
        name: 'offset',
        options: {
            offset: [0, offset],
        },
    };

    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement,
        modifiers: [offsetModifier],
    });

    const {popper: popperStyles} = styles;
    const {popper: popperAttrs} = attributes;

    const Trigger = triggerElement
        ? React.cloneElement(
              triggerElement,
              isControlled
                  ? {}
                  : {
                        // If not controlled, we supply the onClick to hide/show locally
                        onClick: handleReferenceClick,
                    }
          )
        : null;

    return (
        <>
            {Trigger}
            {isOpen
                ? ReactDOM.createPortal(
                      <PopperWrapper ref={setPopperElement} style={popperStyles} {...popperAttrs}>
                          {children}
                      </PopperWrapper>,
                      document.body
                  )
                : null}
        </>
    );
};

Popper.displayName = 'Popper';

Popper.defaultProps = {
    offset: 10,
    isOpen: undefined,
    placement: POPPER_PLACEMENTS.bottom,
    triggerRef: null,
    triggerElement: null,
};

Popper.propTypes = {
    offset: PropTypes.number,
    isOpen: PropTypes.bool,
    placement: PropTypes.oneOf(Object.keys(POPPER_PLACEMENTS)),
    children: PropTypes.node.isRequired,
    triggerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({current: PropTypes.instanceOf(Element)})]),
    triggerElement: PropTypes.node,
};
