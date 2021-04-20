import { useFormikContext } from 'formik'
import { useCallback } from 'react'
import { BoardColor, CreateBoard } from '../../../dto/board'

type SetCoverType = (args: { color?: BoardColor; image?: string }) => void

export const useSetCover = () => {
  const { values, setValues } = useFormikContext<CreateBoard>()
  const setCover: SetCoverType = useCallback(
    ({ color, image }) => {
      if (typeof image === 'string' && image !== '') {
        return setValues({ ...values, image, color: undefined })
      }

      setValues({ ...values, color, image: undefined })
    },
    [values.image, values.color],
  )

  return setCover
}
