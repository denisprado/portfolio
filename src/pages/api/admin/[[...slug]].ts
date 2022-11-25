import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get the incoming request URL, e.g. 'posts?limit=10&offset=0&order=id.asc'
  const requestUrl = req?.url?.substring("/api/admin/".length);
  // build the CRUD request based on the incoming request
  const url = `${process.env.NEXT_PUBLIC_API_URL}/rest/v1/${requestUrl}`;
  const options = {
    method: req.method,
    headers: {
      prefer: req.headers["prefer"] ?? "",
      accept: req.headers["accept"] ?? "application/json",
      ["content-type"]: req.headers["content-type"] ?? "application/json",
      // supabase authentication
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZm9hc3N2amZkaXpxdmNyZ2p4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODg1MDU1NiwiZXhwIjoxOTg0NDI2NTU2fQ.PpmVb_c_F3jmDyqkEMGyDaNMwGz0Hs2valJ6NYNJkAo",
    },
  };
  if (req.body) {
    options.body = JSON.stringify(req.body);
  }
  // call the CRUD API
  const response = await fetch(url, options);
  // send the response back to the client
  res.setHeader("Content-Range", response.headers.get("content-range"));
  res.end(await response.text());
}
