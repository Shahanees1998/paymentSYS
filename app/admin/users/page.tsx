import Breadcrumb from 'components/Breadcrumbs/Breadcrumb'
import UsersTable from 'components/admin/users/UsersTable'
import { type Metadata } from 'next'
import UsersFilter from 'components/admin/users/UsersFilter'
import prisma from 'libs/prismadb'
import { getSignedURL } from 'libs/s3'

export const metadata: Metadata = {
  title: 'Users - Just Tutor Lah'
}

const UsersPage = async (): Promise<JSX.Element> => {
  const users = await Promise.all((await prisma.user.findMany()).map(async (user) => {
    user.image = await getSignedURL(user.profilePicture != null ? user.profilePicture.path : '')
    return user
  }))

  return (
    <>
      <Breadcrumb pageName="Users Management" />
      <div className="flex flex-col gap-10">
        <UsersFilter />
        <UsersTable data={users}/>
      </div>
    </>
  )
}

export default UsersPage
