import { useState } from 'react'
import { List } from '../../../model/client/List'
import { useListUseCases } from '../../../lib/client/useCases/list'
import { isNotEmptyString } from '../../../lib/isNotEmptyString'
import { useCardsState } from '../../../lib/client/state/card'

export const useListComponent = (list: List) => {
  const [name, setName] = useState<string>(list.name)
  const { updateListTitle } = useListUseCases()
  const { cards } = useCardsState()

  const onSubmit = (name: string) => {
    if (isNotEmptyString(name)) return updateListTitle(list.id, name)
    setName(list.name)
  }

  return {
    name,
    cards: cards.filter((card) => card.listId === list.id),
    onSubmit,
    onChange: setName,
  }
}
