import { useState } from 'react'
import { List } from '../../../model/client/List'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { isNotEmptyString } from '../../../lib/isNotEmptyString'

export const useListComponent = (list: List) => {
  const [name, setName] = useState<string>(list.name)
  const { updateListTitle } = useListUseCases()

  const onSubmit = (name: string) => {
    if (isNotEmptyString(name)) return updateListTitle(list.id, name)
    setName(list.name)
  }

  return {
    name,
    onSubmit,
    onChange: setName,
  }
}
