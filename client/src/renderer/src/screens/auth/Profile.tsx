import { Layout } from '@renderer/components'
import { HeadProfile } from './components'

export const Profile = (): JSX.Element => {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-start">
        <HeadProfile />
      </div>
    </Layout>
  )
}
