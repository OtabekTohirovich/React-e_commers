import React from 'react';
import { InputItem,Label,Input } from './styles-input';
import { useTheme } from '@mui/material';
import { tokens } from './theme';

const InputField = ({title,name,inputType,onChange}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <InputItem>
            <Label style={{color:`${colors.gray[100]}`}} htmlFor={name}>{title}</Label>
            <Input
              name={name}
              id={name}
              type={inputType}
              required
              onChange={onChange}
            />
          </InputItem>
    );
};


export default InputField;