import { Button, FormHelperText, Link, Stack, Typography } from '@mui/material';
//form
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFCodes } from '../../components/hook-form';
import { useNavigate } from 'react-router-dom';

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};

function VerifySignUpOtp() {
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    code1: Yup.string().required(),
    code2: Yup.string().required(),
    code3: Yup.string().required(),
    code4: Yup.string().required(),
    code5: Yup.string().required(),
    code6: Yup.string().required(),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormValuesProps) => {
    navigate('/signup-details');
    console.log(data);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" textAlign={'center'}>
        Hi, Thanks for signing up
      </Typography>
      <Typography color="text.disabled" textAlign={'center'} sx={{ width: '80%', margin: 'auto' }}>
        We have shared the 6 digit OTP on your registered Email Address
      </Typography>
      <Stack gap={2} mt={4}>
        <Stack>
          <RHFCodes
            keyName="code"
            inputs={['code1', 'code2', 'code3', 'code4', 'code5', 'code6']}
          />

          {(!!errors.code1 ||
            !!errors.code2 ||
            !!errors.code3 ||
            !!errors.code4 ||
            !!errors.code5 ||
            !!errors.code6) && (
            <FormHelperText error sx={{ px: 2 }}>
              Code is required
            </FormHelperText>
          )}
        </Stack>

        <Button fullWidth size="medium" type="submit" variant="contained">
          Continue
        </Button>
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
      </Stack>
    </FormProvider>
  );
}

export default VerifySignUpOtp;
