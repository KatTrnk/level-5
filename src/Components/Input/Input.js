import TextField from '@mui/material/TextField';

const Input = ({ secretCode, handleChange }) => {
  // const inputs = +secretCode;
  const handleOnChange = (e) => {
    handleChange(e.target.value);
  };

  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        onChange={handleOnChange}
        value={secretCode}
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
    </>
  );
};

export default Input;
