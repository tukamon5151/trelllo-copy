import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup.string().required('名前は入力必須です'),
});
