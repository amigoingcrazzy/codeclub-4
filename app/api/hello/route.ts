import type { NextRequest } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request: NextRequest) {

  function getRandomIntInclusive() {
   const minCeiled = Math.ceil(1);
   const maxFloored = Math.floor(4);
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  };

  const workerResponseMap: { [key: number]: string } = {
    1: "Hello worker!",
    2: "Hi Bob!",
    3: "Greetings Vault Dweller!",
    4: "Hello from the otherside!",
  };

  return new Response(workerResponseMap[getRandomIntInclusive()], {
   headers: {
      'content-type': 'application/json',
   },
  });
}