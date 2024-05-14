import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

import Input from '../Input';
import Buttons from '../Button';

const Keyboard = () => {
  const [secretCode, setSecretCode] = useState('');

  const handleClick = (e) => {
    const newInput = e.target.value;
    setSecretCode(secretCode + newInput);
  };
  const handleChange = (newDigit) => {
    setSecretCode(newDigit);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={3}
      >
        <Input secretCode={secretCode} handleChange={handleChange} />
        <Buttons handleClick={handleClick} />
        <Typography textAlign="center" fontWeight="bold">
          {secretCode === '112567' ? 'Tajná zpráva:Úkol splněn' : ''}
        </Typography>
      </Box>
    </>
  );
};

export default Keyboard;
