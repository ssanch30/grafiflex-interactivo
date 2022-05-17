import React, { useState, cloneElement, Children } from 'react';
import { useEditController, EditContextProvider, useNotify, Button, SaveButton, useUpdate} from 'react-admin';
import { useForm } from 'react-final-form';
import IconCancel from '@mui/icons-material/Cancel';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

 
const EditDialog = props => {

    const handleCloseClick = () => {
        setShowDialog(false);
    };
    const [showDialog, setShowDialog] = useState(0);

    const handleClick = () => {
        setShowDialog(true);
        };

    const [ update ] = useUpdate('ContactoClientes');
    const notify = useNotify();
    //const form = useForm();

    

    const controllerProps = useEditController(props);
    const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
        error,  // error returned by dataProvider when it failed to fetch the record. Useful if you want to adapt the view instead of just showing a notification using the `onFailure` side effect.
        loaded, // boolean that is false until the record is available
        loading, // boolean that is true on mount, and false once the record was fetched
        record, // record fetched via dataProvider.getOne() based on the id from the location
        redirect, // the default redirection route. Defaults to 'list'
        resource, // the resource name, deduced from the location. e.g. 'posts'
        save, // the update callback, to be passed to the underlying form as submit handler
        saving, // boolean that becomes true when the dataProvider is called to update the record
        version, // integer used by the refresh feature
    } = controllerProps;


    return (
        <Dialog
                fullWidth
                open={showDialog}
                    onClose={handleCloseClick}
                    aria-label="Crear"
                >
                <DialogTitle>{defaultTitle}</DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button
                        label="ra.action.cancel"
                        onClick={handleCloseClick}
                        disabled={loading}
                    >
                        <IconCancel />
                    </Button>
                    <SaveButton
                        saving={saving}
                        disabled={loading}
                    />
                </DialogActions>  
    </Dialog>
    );
}



export default EditDialog