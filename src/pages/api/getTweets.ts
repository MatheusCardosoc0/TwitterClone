// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Tweet } from '../../../Typing'
import {groq} from 'next-sanity'
import {sanityClient} from '../../../sanity'

type Data = {
  tweets: Tweet[]
}

const feedQuery = groq`
*[_type == 'tweet'] {
  _id,
  ...
} | order(_createdAt desc)
`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const tweets: Tweet[] = await sanityClient.fetch(feedQuery)
  res.status(200).json({tweets })
}
