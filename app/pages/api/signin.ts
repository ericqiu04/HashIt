// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  access_token: string,
  refresh_token: string,
  expires_in: number,
  expires_at: number
}

type Data = {
  message: string,
  response: Response | null,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // success mock data
  res.status(200).json({
    message: "signin successful",
    response: {
      access_token: "eyJhbGciOiJIUzI1NiIsImtpZCI6IlpDcHZXdTc4VTdkWHR6dGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA1MjA0NTY3LCJpYXQiOjE3MDUyMDA5NjcsImlzcyI6Imh0dHBzOi8vbG1iY3Bqcnl1aG5wanR2cWNwYWQuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjA4ZGU0ZTBmLTI4MTAtNDEwOS1iZWEzLTY3MDE3OGUzN2EyZCIsImVtYWlsIjoic2FtYWxleGRycnJAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MDUyMDA5Njd9XSwic2Vzc2lvbl9pZCI6IjNmZjFhMGViLWIwZmQtNDg0OS04NDk1LWJkZmIxN2JkYzk5NCJ9.6rRPqea9PX7l3P_H0HS0oyjVBlbaa6iCv8CihbHHUrA",
      refresh_token: "Z4BSFTnFnP-TQ2NcqVLRVg",
      expires_in: 3600,
      expires_at: 1705204567
    }
  })
}
