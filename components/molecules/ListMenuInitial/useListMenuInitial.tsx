import { useListUseCases } from '../../../lib/client/useCases/list'
import { useListMenu } from '../../organizations/ListMenuPopover/useListMenuCore'

export const useListMenuInitial = () => {
  const { onClose, listId, setMenuType } = useListMenu()
  const { archiveList } = useListUseCases()
  const onClickMoveListMenu = () => setMenuType('moveList')

  return {
    archiveList: async () => {
      await archiveList(listId)
      onClose()
    },
    onClickMoveListMenu,
  }
}
