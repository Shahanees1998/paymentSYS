// import type { User } from '@prisma/client'
// import prisma from './prismadb'
// import { getSignedURL } from './s3'
// import { getServerSession } from 'next-auth'

// export const fixSession = async (session: any): Promise<any> => {
//   const dbUser = await prisma.user.findFirst({
//     where: {
//       email: session?.user?.email ?? ''
//     }
//   })

//   if (session?.user != null && dbUser != null) {
//     (session.user as User).userType = dbUser?.userType;
//     (session.user as User).onboardingStage = dbUser?.onboardingStage;
//     (session.user as User).profilePicture = dbUser?.profilePicture;
//     (session.user as User).image = dbUser?.profilePicture != null
//       ? await getSignedURL(
//         dbUser?.profilePicture?.path ?? ('' as string)
//       )
//       : null
//   }

//   return session
// }

// export const getCurrentUser = async (): Promise<any> => {
//   try {
//     const session = await getServerSession()
//     return await fixSession(session)
//   } catch (error) {
//     return null
//   }
// }
