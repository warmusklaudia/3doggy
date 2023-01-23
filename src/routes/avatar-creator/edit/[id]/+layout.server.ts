import type { PageLoad } from './$types'
import { user } from '$lib/utils/useAuth'

export const load: PageLoad = async ({ params, data }) => {
  return {
    props: {
      id: params.id,
    },
  }
}
