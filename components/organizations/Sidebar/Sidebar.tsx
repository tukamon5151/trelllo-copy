// ===
// @modules
import { VStack, StackProps } from '@chakra-ui/react'
import { MdDashboard } from 'react-icons/md'
import { GrTemplate } from 'react-icons/gr'
import { CgHome } from 'react-icons/cg'
import { useRouter } from 'next/router'
import { SidebarItem } from '../../molecules/SidebarItem/SidebarItem'

// ===
// @interface
export type Props = StackProps

// ===
// @view
export const Sidebar: React.FC<Props> = (props) => {
  const router = useRouter()
  const path = router.asPath
  return (
    <VStack {...props} spacing={1}>
      <SidebarItem
        isActive={path === '/boards'}
        icon={MdDashboard}
        text="ボード"
      />
      <SidebarItem
        isActive={path === '/templates'}
        icon={GrTemplate}
        text="テンプレート"
      />
      <SidebarItem isActive={path === '/'} icon={CgHome} text="ホーム" />
    </VStack>
  )
}
