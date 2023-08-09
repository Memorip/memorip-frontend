import Header from '@/components/shared/Header'
import SNB from '@/components/shared/SNB'

import LikeButton from './components/LikeButton'
import PlanDetail from './components/PlanDetail'
import { PlanContextProvider } from './contexts/PlanContext'

const PlanDetailView = () => {
  return (
    <PlanContextProvider>
      <Header>
        <div>
          <Header.Logo />
        </div>
        <div className='flex items-center gap-4'>
          <LikeButton />
          <Header.MapButton />
          <Header.HamburgerButton />
        </div>
      </Header>
      <SNB />
      <PlanDetail />
    </PlanContextProvider>
  )
}

export default PlanDetailView
