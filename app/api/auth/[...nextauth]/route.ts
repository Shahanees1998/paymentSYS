// import NextAuth from 'next-auth/next'
// import Google from 'next-auth/providers/google'
// import Credentials from 'next-auth/providers/credentials'
// import Facebook from 'next-auth/providers/facebook'
// import bcrypt from 'bcrypt'
// import prisma from 'libs/prismadb'
// import { uploadFileFromURL } from 'libs/s3'
// import { type User, UserType } from '@prisma/client'
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
// import { fixSession } from 'libs/helpers'

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     Google({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? '',
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
//     }),
//     Facebook({
//       clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
//     }),
//     Credentials({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: 'credentials',
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         username: { label: 'Email', type: 'text', placeholder: 'email' },
//         password: { label: 'Password', type: 'password' }
//       },
//       async authorize (credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         let user = await prisma.user.findFirst({ where: { email: credentials?.username } })
//         if (user == null && credentials?.username != null && credentials?.password != null) {
//           user = await prisma.user.create({
//             data: {
//               name: '',
//               email: credentials?.username,
//               password: await bcrypt.hash(credentials.password, Number(process.env.BCRYPT_SALT) ?? 5),
//               userType: UserType.User,
//               onboardingStage: {
//                 emailVarified: false,
//                 phoneVarified: false,
//                 addressProvided: false,
//                 documentsProvided: false
//               },
//               approved: false
//             }
//           })
//           return user
//         } else if (user != null && credentials?.password != null) {
//           const passwordMatch = await bcrypt.compare(credentials.password, user.password ?? '') as boolean
//           if (passwordMatch) {
//             return user
//           }
//         }

//         return null
//       }
//     })
//   ],
//   session: {
//     strategy: 'jwt'
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET
//   },
//   pages: {
//     error: '/auth/login', // Error code passed in query string as ?error=
//     signIn: '/auth/login' // Displays signin buttons
//   },
//   callbacks: {
//     async signIn ({ user, account, profile, email, credentials }) {
//       if (user?.email === undefined || user?.email === null) {
//         return false
//       }
//       const isNewUser = (user as User).createdOn == null
//       const dbUser = user as User

//       if (isNewUser) {
//         if (user?.image != null) { await uploadFileFromURL(user.image, `profile/${user.email.split('@').join('_').split('.').join('_')}.jpeg`, 'image/jpeg') }
//         delete user.image;
//         (user as User).profilePicture = {
//           name: `${user.email.split('@').join('_').split('.').join('_')}.jpeg`,
//           path: `profile/${user.email.split('@').join('_').split('.').join('_')}.jpeg`,
//           type: 'image/jpeg',
//           size: 0
//         };
//         (user as User).userType = UserType.User;
//         (user as User).approved = false
//       }

//       if (dbUser.userType === UserType.Blocked) {
//         return false
//       }

//       return true
//     },
//     async redirect ({ url, baseUrl }) {
//       return url
//     },
//     async session ({ session, user, token }) {
//       await fixSession(session)
//       return session
//     },
//     async jwt ({ token }) {
//       if (token?.email != null) {
//         const dbUser = await prisma.user.findFirst({
//           where: {
//             email: token.email
//           }
//         })
//         token.email = dbUser?.email
//         token.phone = dbUser?.phone
//         token.userType = dbUser?.userType
//         token.profilePicture = dbUser?.profilePicture
//         token.onboardingStage = dbUser?.onboardingStage
//       }
//       return token
//     }

//   }
// })

// export { handler as GET, handler as POST }
