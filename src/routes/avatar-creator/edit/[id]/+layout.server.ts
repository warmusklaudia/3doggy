import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, data }) => {
  return {
    props: {
      id: params.id,
    },
  }
}
