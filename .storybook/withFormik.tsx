import { Formik } from 'formik'

export const withFormik = (Story) => (
  <Formik initialValues={{}} onSubmit={() => undefined}>
    <Story />
  </Formik>
)
