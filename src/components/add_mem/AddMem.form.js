import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledPaper, useFormStyles } from './AddMem.styled';
import { useDispatch } from 'react-redux';
import { AddMem } from 'data/actions/mem.actions.js';

const AddMemForm = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const { form, button } = useFormStyles();
  return (
    <StyledPaper>
      <Typography id='add-new-mem' variant={'h5'}>
        Add New Mem
      </Typography>
      <Formik
        initialValues={{
          title: 'Java',
          mem_image:
            'https://www.blasty.pl/upload/images/large/2019/03/java_2019-03-17_12-28-35.jpg',
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string()
            .min(2, 'Title is too short!')
            .max(16, 'Too Long!')
            .required('Required'),
          mem_image: Yup.string()
            .url('Invalid URL Mem Image!')
            .required('Required'),
        })}
        onSubmit={(values) => {
          dispatch(AddMem({ uuid: uuidv4(), ...values }));
          setOpenModal(false);
        }}
      >
        {({ touched, errors }) => (
          <Form autoComplete='off' className={form}>
            <Field
              name='title'
              render={({ field }) => (
                <TextField
                  {...field}
                  error={touched.title && errors.title}
                  label='Mem Title'
                  margin='normal'
                  helperText={touched.title && errors.title}
                />
              )}
            />
            <Field name='mem_image'>
              {({ field }) => (
                <TextField
                  {...field}
                  margin='normal'
                  error={touched.mem_image && errors.mem_image}
                  label='Mem Image Link'
                  helperText={touched.mem_image && errors.mem_image}
                  FormHelperTextProps={{
                    filled: true,
                  }}
                  defaultValue='Hello World'
                />
              )}
            </Field>
            <Button
              className={button}
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </StyledPaper>
  );
};

export default AddMemForm;
