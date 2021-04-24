import { useState } from 'react'
import { List } from '../../../model/client/List'
import { updateTitle } from '../../../lib/client/usecases/list'
import { useListsDispatch } from '../../../lib/client/hooks/useLists'
import { isNotEmptyString } from '../../../lib/isNotEmptyString'

export const useListComponent = (list: List) => {
  const [value, setValue] = useState<string>(list.name)
  const { updateList } = useListsDispatch()

  const onSubmit = (submitValue: string) => {
    if (isNotEmptyString(submitValue))
      return updateTitle(list.id, submitValue, updateList)
    setValue(list.name)
  }

  return {
    value,
    onSubmit,
    onChange: setValue,
  }
}
