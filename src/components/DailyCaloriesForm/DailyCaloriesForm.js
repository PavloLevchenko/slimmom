import * as React from 'react';
import { Modal } from '@mui/material';

import DailyCalorieIntake from 'components/DailyCalorieIntake/dailyCalorieIntake';
import { useFormik } from 'formik';
import {
  Title,
  Label,
  Form,
  Input,
  FormWrapper,
  Button,
  RadioGroup,
  StyledModalBox,
} from './DailyCaloriesForm.styled';

export const DailyCaloriesForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '',
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <FormWrapper>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          Height *
          <Input
            id="height"
            name="height"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.height}
            aria-label="Your height"
          />
        </Label>

        <Label htmlFor="age">
          Age *
          <Input
            id="age"
            name="age"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.age}
            aria-label="Your age"
          />
        </Label>
        <Label htmlFor="currentWeight">
          Current weight *
          <Input
            id="currentWeight"
            name="currentWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.currentWeight}
            aria-label="Your current weight"
          />
        </Label>
        <Label htmlFor="desiredWeight">
          Desired weight *
          <Input
            id="desiredWeight"
            name="desiredWeight"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.desiredWeight}
            aria-label="Your desired weight"
          />
        </Label>
        <Label id="bloodType">
          Blood type *
          <RadioGroup role="group" aria-labelledby="bloodType">
            <Label>
              <input type="radio" name="bloodType" value="1" />1
            </Label>
            <label>
              <input type="radio" name="bloodType" value="2" />2
            </label>
            <label>
              <input type="radio" name="bloodType" value="3" />3
            </label>
            <label>
              <input type="radio" name="bloodType" value="4" />4
            </label>
          </RadioGroup>
        </Label>
        <Button type="submit" onClick={handleOpen}>
          Start losing weight
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledModalBox>
            <DailyCalorieIntake closeModal={handleClose} />
          </StyledModalBox>
        </Modal>
      </Form>
    </FormWrapper>
  );
};
