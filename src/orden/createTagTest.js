import React from 'react';

import {
    AutocompleteArrayInput,
    Create,
    ReferenceArrayInput,
    SimpleForm,
    TextInput,
    useCreate,
    useCreateSuggestionContext
} from 'react-admin';

import CreateProductLayout from '../productos/components/CreateProductLayout';

import {
    Box,
    BoxProps,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@mui/material';


const CreateTag = () => {
    const { filter, onCancel, onCreate } = useCreateSuggestionContext();
    const [value, setValue] = React.useState(filter || '');
    const [create] = useCreate('productos');

    const handleSubmit = (event, _ref, {values}) => {
        event.preventDefault();
        create(
            {
                payload: {
                    data: {
                         ...values,
                    },
                },
            },
            {
                onSuccess: ({ data }) => {
                    setValue('');
                    onCreate(data);
                },
            }
        );
    };

    return (
        <Dialog open onClose={onCancel}>
            <form onSubmit={handleSubmit}>
                <DialogContent>
                    <CreateProductLayout isCustomerDisabled={true}/>
                </DialogContent>
                <DialogActions>
                    <Button type="submit">Save</Button>
                    <Button onClick={onCancel}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default CreateTag