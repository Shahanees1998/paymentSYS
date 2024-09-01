'use server'

import { type EmailQueue, PrismaClient, EmailStatus } from '@prisma/client'
import nodemailer from 'nodemailer'

const prisma = new PrismaClient()

const numberOfEmailsToSend = 10

interface CustomEmailObject {
  to: string
  subject: string
  body: string
  timeStamp: Date
  reason: string
  sendNow: boolean
  status: string
}
const sendEmail = async (email: EmailQueue): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email.to,
      subject: email.subject,
      text: email.body
    }
    await transporter.sendMail(mailOptions)
    await markEmailAsSent(email.id)
  } catch (e) {
    // log error
  }
}

const markEmailAsSent = async (id: string): Promise<void> => {
  try {
    await prisma.emailQueue.update({
      where: { id },
      data: { status: EmailStatus.Sent }
    })
  } catch (e) {
    // log error
  }
}

export const addEmailToQueue = async (reqBody: CustomEmailObject): Promise<void> => {
  try {
    const from = process.env.EMAIL_FROM
    if (from !== undefined) {
      await prisma.emailQueue.create({
        data: {
          from,
          to: reqBody.to,
          subject: reqBody.subject,
          body: reqBody.body,
          timeStamp: reqBody.sendNow ? new Date() : reqBody.timeStamp,
          reason: reqBody.reason,
          sendNow: reqBody.sendNow,
          status: EmailStatus.Queued
        }
      })
    }
    void sendEmailFromQueue()
  } catch (error) {
    // log error
  }
}

export const sendEmailFromQueue = async (): Promise<void> => {
  try {
    const currentDateTime = new Date()
    const emails = await prisma.emailQueue.findMany({
      where: {
        OR: [
          { status: EmailStatus.Queued }
        ],
        timeStamp: {
          lte: currentDateTime.toISOString()
        }
      },
      take: numberOfEmailsToSend,
      orderBy: [
        { sendNow: 'desc' },
        { timeStamp: 'asc' }
      ]
    }).catch()

    if (emails.length > 0) {
      for (const item of emails) {
        await sendEmail(item)
      }
    }
  } catch (error) {
    // log error
  }
}
