import { Dispatchers } from '../hooks/useLists'
import { updateListRequest } from '../requests/listRequest'
import { UpdateList } from '../../../dto/list'
import { NotEmptyString } from '../../isNotEmptyString'

export const updateTitle = async <T extends string>(
  listId: number,
  name: NotEmptyString<T>,
  updateListState: Dispatchers['updateList'],
): Promise<void> => {
  const dto: UpdateList = { id: listId, name }
  const list = await updateListRequest(dto)
  updateListState(list)
}
