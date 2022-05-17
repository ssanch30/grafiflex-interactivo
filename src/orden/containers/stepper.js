import * as React from 'react';
import Card from "@mui/material/Card";
import { CardActions, FormDataConsumer, SelectArrayInput } from 'react-admin';
import  Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent'
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReferenceInput, SimpleFormIterator, ReferenceArrayInput, AutocompleteInput, AutocompleteArrayInput, FormWithRedirect, useCreate, useNotify } from 'react-admin';
import { FormatListNumbered } from '@mui/icons-material';
const steps = ['Selecciona el Cliente', 'Selecciona el Producto', 'Agregar Archivos', 'Datos'];


function getStepContent(stepIndex ) {
  const handleChange=(value)=>{
    console.log(value)
}
  switch (stepIndex) {
    case 0:
      return (
        <ReferenceInput label='Cliente' source='clienteId' reference='Clientes'>
          <AutocompleteInput variant='outlined' optionText='razonSocial' onChange={handleChange}/> 
        </ReferenceInput>
      );
    case 1:
      return(
          <FormDataConsumer>
            {({
              formData, // The whole form data
              scopedFormData, // The data for this item of the ArrayInput
              getSource, // A function to get the valid source inside an ArrayInput
              ...rest
              }) =>
                formData  ? (
                  <AutocompleteArrayInput variant='outlined'  source={'datosFacturacion.precioProducto'}  optionText='tipoProducto'/> 

                ) : console.log(null)
            }
          </FormDataConsumer>
      );
    case 2:
      return 'DROP ZONE!!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function OrdenStepper(props) {
        //const {record} = props
        const [activeStep, setActiveStep] = React.useState(0);
        const [skipped, setSkipped] = React.useState(new Set());
      
        const isStepOptional = (step) => {
          return step === 1 || step === 1;
        };
        const isStepSkipped = (step) => {
          return skipped.has(step);
        };
      
        const handleNext = () => {
          let newSkipped = skipped;
          if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
          }
      
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped(newSkipped);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleSkip = () => {
          if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
          }
      
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
          });
        };
      
        const handleReset = () => {
          setActiveStep(0);
        };
      
        return (
          <Card sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} >
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                  labelProps.optional = (
                    <Typography variant="caption">Opcional</Typography>
                  );
                }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>                  
                  </Step>
                  
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reiniciar</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent:'space_between', flexDirection: 'row', pt: 2 }}>
                  <CardActions>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Volver
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {isStepOptional(activeStep) && (
                      <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                        Omitir
                      </Button>
                    )}

                    <Button onClick={handleNext} >
                      {activeStep === steps.length - 1 ? 'Crear Orden' : 'Continuar'}
                    </Button>
                  </CardActions>
                </Box>
              </React.Fragment>
            )}
          </Card>
        );
      }

const StepsContainer =  ( {activeStep, onChange, record} )=> {
  const [create, { loading }] = useCreate('Ordens');
  const notify = useNotify();
  const handleSubmit = async values => {
    create(
        { payload: { data: values } },
        {
            onSuccess: ({ data }) => {
                onChange();
            },
            onFailure: ({ error }) => {
                notify(error.message, 'error');
            }
        }
    );
  };
return(
  <FormWithRedirect
    render={({
      handleSubmitWithRedirect,
      pristine,
      saving
      })=>
        (
        <ReferenceInput source='id' reference='Cliente'>
          <AutocompleteInput optionText='razonSocial'/> 
        </ReferenceInput> 
        )
    }
  />

    
)
}