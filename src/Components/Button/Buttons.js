import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Buttons = ({ handleClick }) => {
  const arrayOfButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <Grid container spacing={3} columnSpacing={4}>
        {arrayOfButtons.map((b) => (
          <Grid item xs={4}>
            <Button
              style={{ minWidth: '90%' }}
              padding={2}
              variant="contained"
              value={b}
              key={b}
              onClick={handleClick}
            >
              {b}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Buttons;
