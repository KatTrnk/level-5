import TextField from '@mui/material/TextField';

export const Input = ({ input, setInput }) => {
  const inputs = +input;
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        onChange={handleOnChange}
        value={inputs || input ? input : ''}
        label="secret code"
        placeholder="Enter the secret code"
        color="secondary"
        sx={{
          width: { xs: 300, sm: 600, md: 600 },
          textAlign: 'center',

          '& .MuiOutlinedInput-root': {
            color: '"#000"',
            fontFamily: 'Roboto',
            fontWeight: 'bold',

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#778899',
              borderWidth: '1px',
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#2F4F4F',
                borderWidth: '1.5px',
              },
            },
          },
          '& .MuiInputLabel-outlined': {
            color: '#778899',
            '&.Mui-focused': {
              color: '#2F4F4F',
            },
          },
        }}
      />
    </div>
  );
};
