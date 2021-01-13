import React, { 
  createContext, 
  createRef, 
  useRef, 
  useContext, 
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef
} from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Select.styled';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const SelectContext = createContext();

const Select = forwardRef(({ children, onSelection, labelAccessor, filterOption, ...props }, ref) => {
    const containerRef = createRef();
    const inputRef = createRef();
    const optionRefs = useRef([]);

    const [showContainer, setShowContainer] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputFocus = () => {
      setShowContainer(true)
    }

    const handleInputBlur = e => {
      // relatedTarget will be one of the optionsRefs if we're trying to change focus to container
      if (!optionRefs.current.includes(e.relatedTarget)) {
        setShowContainer(false);
      }
    }

    /* Exposed via imperitiveHandle */
    const _closeDropdown = () => setShowContainer(false);
    const _openDropdown = () => setShowContainer(true);
    useImperativeHandle(ref, () => ({
      closeDropdown: _closeDropdown,
      openDropdown: _openDropdown
    }))

    const handleOptionSelected = option => {
        setInputValue(option[labelAccessor])
        setSelectedOption(option)
        onSelection(option)
        setShowContainer(false);
    }

    const handleSetInputValue = value => {
        setInputValue(value)
    }

    /* Handling various keypress events */
    const _setFocusToContainer = () => {
      if (optionRefs.current[0]) {
        optionRefs.current[0].focus()
      }
    }

    const _handleInputArrowDown = () => {
        // Make sure container is open first!
        setShowContainer(true)
        // set focus to selected element
        _setFocusToContainer();
    }

    const _getIndexOfOption = (option) => {
      const options = optionRefs.current;
      return options.indexOf(
        options.find((o) => o.value === option.value)
      );
    }

    const _getNextOption = (currentOption) => {
      const currentIndex = _getIndexOfOption(currentOption);
      const options = optionRefs.current;
      if (currentIndex === options.length - 1) return 0
      else return currentIndex + 1;
    }

    const _getPrevOption = (currentOption) => {
      const currentIndex = _getIndexOfOption(currentOption);
      const options = optionRefs.current;
      if (currentIndex === 0) return options.length - 1
      else return currentIndex - 1
    };

    const _handleOptionArrowDown = (currentOption, e) => {
      e.preventDefault()
      const options = optionRefs.current;
      const nextOption = options[_getNextOption(currentOption)];
      nextOption.focus()
    }

    const _handleOptionArrowUp = (currentOption, e) => {
      e.preventDefault()
      const options = optionRefs.current;
      const prevOption = options[_getPrevOption(currentOption)];
      prevOption.focus();
    }

    const handleKeyPressedInInput = ({ key }) => {
        if (key === "ArrowDown") _handleInputArrowDown();
        // if (key === "ArrowUp") _handleInputArrowUp();
    }

    const handleKeyPressedOnOption = (e) => {
      const { key, target } = e;
      if (key === "ArrowDown") _handleOptionArrowDown(target, e);
      if (key === "ArrowUp") _handleOptionArrowUp(target, e);
    }

    return (
        <SelectContext.Provider value={{
            showContainer,
            setShowContainer,
            containerRef,
            inputRef,
            handleOptionSelected,
            selectedOption,
            inputValue,
            handleSetInputValue,
            filterOption,
            handleKeyPressedInInput,
            handleKeyPressedOnOption,
            optionRefs,
            handleInputFocus,
            handleInputBlur,
        }}>
            <Styled.Wrapper {...props}>
                {children}
            </Styled.Wrapper>
        </SelectContext.Provider>

    );
});

Select.propTypes = {
    onSelection: PropTypes.func.isRequired,
}

Select.Label = function Label({ children, ...props }) {
    return (
        <Styled.Label {...props}>{children}</Styled.Label>
    )
}

Select.InputContainer = function InputContainer({ children, ...props }) {
    return (
        <Styled.InputContainer {...props}>{children}</Styled.InputContainer>
    )
}

Select.Input = function Input({ children, renderInput, ...props }) {
    const { 
      inputRef, 
      inputValue, 
      handleSetInputValue, 
      handleKeyPressedInInput,
      handleInputFocus,
      handleInputBlur
    } = useContext(SelectContext)

    if (renderInput) {
      return React.cloneElement(renderInput(), { 
        value: inputValue, 
        onChange: e => handleSetInputValue(e.target.value), 
        onKeyDown: handleKeyPressedInInput, 
        ref: inputRef ,
        onFocus: handleInputFocus,
        onBlur: handleInputBlur,
        ...props,
      })
    }

    return (
      <Styled.Input
        {...props}
        value={inputValue}
        onChange={(e) => handleSetInputValue(e.target.value)}
        onKeyDown={handleKeyPressedInInput}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
      />
    );
}

Select.Input.propTypes = {
    labelAccessor: PropTypes.string
}

Select.Input.defaultProps = {
    labelAccessor: 'label'
}

export const TOP = 'TOP'
export const RIGHT = 'RIGHT'
export const BOTTOM = 'BOTTOM'
export const LEFT = 'LEFT'

Select.Dropdown = function Dropdown({ children, scrollArea, ...props }) {
    const { containerRef, showContainer } = useContext(SelectContext)
    const [containerPosition, setContainerPosition] = useState(BOTTOM)
    const intersections = useIntersectionObserver(containerRef, scrollArea)

    // listen to intersections for changes, set position accordingly
    useEffect(() => {
        if (intersections.topHit) setContainerPosition(BOTTOM)
        if (intersections.rightHit) setContainerPosition(LEFT)
        if (intersections.bottomHit) setContainerPosition(TOP)
        if (intersections.leftHit) setContainerPosition(RIGHT)
    }, [intersections])

    return (
        <Styled.Dropdown {...props} showContainer={showContainer} containerPosition={containerPosition} ref={containerRef}>
            {children}
        </Styled.Dropdown>
    )
}

Select.OptionsList = function OptionsList({ children }) {
  const { optionRefs } = useContext(
    SelectContext
  );

  return (
    <Styled.OptionsList >
      {React.Children.map(children, (child, i) =>
        React.cloneElement(child, { ref: (r) => (optionRefs.current[i] = r) })
      )}
    </Styled.OptionsList>
  );
}

Select.Option = React.forwardRef(({ option, children, ...props }, ref) => {
    const { handleOptionSelected, inputValue, filterOption, handleKeyPressedOnOption } = useContext(SelectContext)

    const _handleKeyDown = (event) => {
      if (event.key === 'Enter') return
      else handleKeyPressedOnOption(event)
    }

    const _handleKeyUp = event => {
      if (event.key === 'Enter') handleOptionSelected(option)
    }

    if (filterOption(inputValue, option)) {
        return (
          <Styled.Option
            tabIndex="-1"
            {...props}
            onMouseUp={() => handleOptionSelected(option)}
            onKeyDown={_handleKeyDown}
            onKeyUp={_handleKeyUp}
            ref={ref}
          >
            {children}
          </Styled.Option>
        );
    }
    return null
})

export default Select;
