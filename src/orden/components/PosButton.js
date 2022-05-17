import * as React from 'react';
import { useField } from 'react-final-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ToggleButton } from '@mui/material';
import { useChoices } from 'react-admin';

const ButtonGroupInputItem = ({
    choice,
    optionText,
    optionValue,
    source,
    translateChoice,
    onChange,
    handleClick
}) => {
    const { getChoiceText, getChoiceValue } = useChoices({
        optionText,
        optionValue,
        translateChoice,
    });
    const label = getChoiceText(choice);
    const value = getChoiceValue(choice);
    const { input: { type, ...inputProps },} = useField(source, { value });

    const posArray=[0,180,90,270]
    const nodeId = `${source}_${value}`;

return (        
        <ToggleButton
            onClick={handleClick(value)}
            value={value}
            {...inputProps}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                width='18'
                height='18'
            >
                <g
                    aria-label="A"
                    transform={`rotate(${posArray[value-1]}, 9,9) `}
                    >   
                    <path
                    d="m 16.240234,18 h -2.266601 l -1.56836,-4.458008 H 5.4873047 L 3.9189453,18 H 1.7597656 L 7.5820312,2.0048828 H 10.417969 Z M 11.75,11.71582 8.9462891,3.8632813 6.1318359,11.71582 Z"
                    fill='dimGrey' />
                </g>
            </svg>
        </ToggleButton>
    );
};

export default ButtonGroupInputItem;
