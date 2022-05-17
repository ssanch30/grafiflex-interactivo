import * as React from 'react';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ToggleButton} from '@mui/material/';
import makeStyles from '@mui/styles/makeStyles';
import { useInput, Labeled  } from 'react-admin';

import Winding1 from './img/Winding1.png'
import Winding2 from './img/Winding2.png'

const useStyles = makeStyles(
    theme => ({
        label: {
            marginLeft: '10px'
        },
        MuiToggleButton:{
                padding:'5px',
                '& .MuiToggleButton-label': {
                  pointerEvents: 'none',
                },
            
        },
        MuiToggleGroup:{
            marginBottom: '20px',
        }

    }),
    { name: 'ButtonGroupInput' }
);


const WindingInput = (props) => {
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
    <Labeled label='Embobinado' className={classes.label}>
        <ToggleButtonGroup  exclusive {...field}  className={classes.MuiToggleGroup}>
            <ToggleButton 
                value='1' 
                className={classes.MuiToggleButton}
                >
                <SvgPosition wind={Winding1}/>
            </ToggleButton>
            <ToggleButton
                value='2'
                className={classes.MuiToggleButton}
            >
                <SvgPosition wind = {Winding2} />
            </ToggleButton>
        </ToggleButtonGroup>
    </Labeled>

    );
};


const SvgPosition = ({wind})=>( 

        <svg xmlns="http://www.w3.org/2000/svg" width='30px' height='30px' pointerEvents="none">
            <g>   
                <image href={wind} x='0' y='0' width={'100%'}/>
            </g>
        </svg>
)


export default WindingInput;
