
  import React from "react";
  import { FileInput } from "react-admin";
  import { useStorageInput } from "../hooks/useStorageInput";
  import { AmplifyFileField } from "./AmplifyFileField.js";
  /*
  type Props = {
    source: string;
    multiple?: boolean;
    options?: any;
    storageOptions?: any;
  } & FileInputProps &
    InputProps<FileInputOptions>;
*/

export const AmplifyFileInput = ({
    options = {},
    storageOptions = {},
    ...props
  }) => {
    const { onDropAccepted } = useStorageInput({
      source: props.source,
      multiple: props.multiple,
      onDropAcceptedCallback: options.onDropAccepted,
      storageOptions,
    });
  
    return (
      <FileInput {...props} options={{ ...options, onDropAccepted }}>
        <AmplifyFileField storageOptions={storageOptions} />
      </FileInput>
    );
  };

 