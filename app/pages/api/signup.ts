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

    // TODO mock data
    
}
