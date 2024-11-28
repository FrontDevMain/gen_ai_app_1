import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type FormValuesProps = {
  email: string;
  password: string;
};

function AuthSignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email or mobile number is required')
      .test(
        'valid-email-or-mobile',
        'Enter a valid email address or mobile number',
        function (value) {
          const isEmail = Yup.string().email().isValidSync(value);
          const isMobile = Yup.string()
            .matches(/^[0-9]{10}$/, 'Invalid mobile number')
            .isValidSync(value);

          return isEmail || isMobile;
        }
      ),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = (data: FormValuesProps) => {
    navigate('/verify-signup-otp');
    console.log(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" textAlign={'center'} mb={3}>
        Signup
      </Typography>
      <Stack gap={2}>
        <Stack>
          <Typography variant="body2" color="text.secondary">
            Email
          </Typography>
          <RHFTextField name="email" />
        </Stack>

        <Stack>
          <Typography variant="body2" color="text.secondary">
            Password
          </Typography>
          <RHFTextField
            name="password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Icon icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack>
          <Typography variant="body2" color="text.secondary">
            Confirm Password
          </Typography>
          <RHFTextField
            name="confirmPassword"
            type={showPassword1 ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword1(!showPassword1)} edge="end">
                    <Icon icon={showPassword1 ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Button fullWidth size="medium" type="submit" variant="contained">
          Sign Up
        </Button>
      </Stack>

      <Typography textAlign={'center'} my={2}>
        Already have an account?
        <Link
          variant="body2"
          color="primary"
          underline="none"
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Login
        </Link>
      </Typography>
    </FormProvider>
  );
}

export default AuthSignUp;
