import * as React from 'react';


import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ToggleButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useInput, Labeled} from 'react-admin';


const useStyles = makeStyles(
    theme => ({
        label: {
            transform: 'translate(0, 5px) scale(0.75)',
            
            transformOrigin: `top ${
                theme.direction === 'ltr' ? 'left' : 'right'
            }`,
        },
        MuiToggleButton:{
                '& .MuiToggleButton-label': {
                  pointerEvents: 'none',
                },
            
        },
        MuiToggleGroup:{
            marginBottom: '20px'
        },
        svg:{
            pointerEvents: 'none'
        }

    }),
    { name: 'ButtonGroupInput' }
);


const ButtonGroupInput = (props) => {
    const {
        choices = [],
        classes: classesOverride,
        format,
        helperText,
        formData,
        label,
        loaded,
        loading,
        margin = 'dense',
        onBlur,
        onChange,
        onFocus,
        options,
        optionText,
        optionValue,
        parse,
        record, 
        resource,
        row,
        source,
        translateChoice,
        validate,
        ...rest
    } = props;
    const classes = useStyles(props);





    const { field } = useInput({
        format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        defaultValue:'1',
        source,
        validate,
        ...rest,
    });    
    return (
    <Labeled label='Posición'>
        <ToggleButtonGroup  exclusive {...field}  className={classes.MuiToggleGroup}>
            <ToggleButton 
                name = 'posicion'
                value='1' 
                className={classes.MuiToggleButton}
                >
                <SvgPosition rot={0}/>
            </ToggleButton>
            <ToggleButton
                name = 'posicion'
                value='2'
                className={classes.MuiToggleButton}
            >
                <SvgPosition rot = {180} />
            </ToggleButton>
            <ToggleButton
                name = 'posicion'
                value='3'
                className={classes.MuiToggleButton}
            >
                <SvgPosition rot = {90}/>
            </ToggleButton>
            <ToggleButton
                name = 'posicion'
                value='4'
                className={classes.MuiToggleButton}
                >
                <SvgPosition rot = {270}/>
            </ToggleButton>
        </ToggleButtonGroup>
    </Labeled>

    );
};


const SvgPosition = ({rot})=>{
    
    return( 
        <svg xmlns="http://www.w3.org/2000/svg" width='18' height='18' pointerEvents="none">
            <g
                aria-label="A"
                transform={`rotate(${rot||0}, 9,9) `}
                >   
                <path
                d="m 16.240234,18 h -2.266601 l -1.56836,-4.458008 H 5.4873047 L 3.9189453,18 H 1.7597656 L 7.5820312,2.0048828 H 10.417969 Z M 11.75,11.71582 8.9462891,3.8632813 6.1318359,11.71582 Z"
                fill='dimGrey' />
            </g>
        </svg>
)}


export default ButtonGroupInput;
