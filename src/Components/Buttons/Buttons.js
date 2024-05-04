import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const Buttons = ({ handleClick }) => {
  const button = [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
    { number: '6' },
    { number: '7' },
    { number: '8' },
    { number: '9' },
  ];
  return (
    <div>
      <Grid container spacing={3} columnSpacing={4}>
        {button.map((b) => (
          <Grid item md={4} xs={4} sm={4}>
            <Button
              type="submit"
              style={{ minWidth: '90%' }}
              padding={2}
              variant="contained"
              value={b.number}
              key={b.number}
              onClick={handleClick}
            >
              {b.number}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
