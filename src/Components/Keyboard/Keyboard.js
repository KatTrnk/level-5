import { Input } from '../Input/Input';
import { Buttons } from '../Buttons/Buttons';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Keyboard = ({}) => {
  const [input, setInput] = useState([]);

  const handleClick = (e) => {
    const newInput = e.target.value;
    setInput(input + newInput);
  };

  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={3}
      >
        <Input input={input} setInput={setInput} />
        <Buttons handleClick={handleClick} />
        <Typography textAlign="center" fontWeight="bold">
          {input === '112567' ? 'Tajná zpráva:Úkol splněn' : ''}
        </Typography>
      </Box>
    </div>
  );
};
