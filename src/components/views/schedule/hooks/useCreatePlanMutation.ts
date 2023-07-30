import { useMutation } from '@tanstack/react-query'

import { createPlan } from '@/lib/apis/plan'

const useCreatePlanMutation = () => {
  return useMutation({
    mutationFn: createPlan,
  })
}

export default useCreatePlanMutation
