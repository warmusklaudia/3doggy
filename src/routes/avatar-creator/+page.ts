import type { PageLoad } from './$types'
import { user } from '$lib/utils/useAuth'

export const load: PageLoad = async ({ params }) => {
  await user.known

  // fetch and return data based on user
}
