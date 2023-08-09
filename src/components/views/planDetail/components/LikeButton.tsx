import Header from '@/components/shared/Header'
import { usePlanContext } from '@/components/views/planDetail/contexts/PlanContext'
import { useLike } from '@/components/views/planDetail/hooks/useLike'

const LikeButton = () => {
  const { plan } = usePlanContext()
  const { handleClickLike } = useLike({ planId: plan.id })

  return <Header.LikeButton isLiked={true} onClick={handleClickLike} />
}

export default LikeButton
