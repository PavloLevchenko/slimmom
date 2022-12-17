import {
  FormControl,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { Input } from './Input';

export const CalorieForm = () => (
  <FormControl sx={{ mt: theme => theme.spacing(2) }}>
    <Input name="height" label="Height*" />
    <Input name="age" label="Age*" />
    <Input name="currentWeight" label="Current weight*" />
    <Input name="desiredWeight" label="Desired weight*" />
    <Input bloodType="true" name="bloodType" label="Blood type *" />
    <RadioGroup name="bloodType" row>
      <FormControlLabel value="1" control={<Radio />} label="1" />
      <FormControlLabel value="2" control={<Radio />} label="2" />
      <FormControlLabel value="3" control={<Radio />} label="3" />
      <FormControlLabel value="4" control={<Radio />} label="4" />
    </RadioGroup>
    <Button
      sx={{ mt: theme => theme.spacing(2) }}
      variant="contained"
      color="button"
      type="submit"
    >
      Submit
    </Button>
  </FormControl>
);
