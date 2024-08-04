import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { customAlphabet } from "nanoid";

type ResultCodeMap = Record<ResultCode, string>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  21 // 21-char random string
)

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number
      }
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)

export const runAsyncFnWithoutBlocking = (
  fn: (...args: any) => Promise<any>
) => {
  fn()
}

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const getStringFromBuffer = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

export enum ResultCode {
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidSubmission = 'INVALID_SUBMISSION',
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  UnknownError = 'UNKNOWN_ERROR',
  UserCreated = 'USER_CREATED',
  UserLoggedIn = 'USER_LOGGED_IN'
}

const resultCodeToEventMap: ResultCodeMap = {
  [ResultCode.InvalidCredentials]: 'INVALID_CREDENTIALS (Invalid Credentials)',
  [ResultCode.InvalidSubmission]: 'INVALID_SUBMISSION (Invalid Submission)',
  [ResultCode.UserAlreadyExists]: 'USER_ALREADY_EXISTS (User Already Exists)',
  [ResultCode.UnknownError]: 'UNKNOWN_ERROR (Something Wen\'t Wrong',
  [ResultCode.UserCreated]: 'USER_CREATED (User Has Been Created)',
  [ResultCode.UserLoggedIn]: 'USER_LOGGED_IN (User Logged In)'
}

export const getMessageFromCode = (resultCode: string) => {
  return resultCodeToEventMap[resultCode as ResultCode] || resultCodeToEventMap[ResultCode.UnknownError]
}