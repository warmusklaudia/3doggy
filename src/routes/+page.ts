import type { PageLoad } from './$types'
import { user } from '$lib/utils/useAuth'
export const load: PageLoad = async () => {
  await user.known
}
