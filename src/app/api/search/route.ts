import axios, { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export function GET(request: Request, response: Response) {
  console.log(request);
  return NextResponse.json({ url: "HEllo" });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { searchTerm } = body;
  let response: AxiosResponse | undefined = undefined; // Initialize response to undefined
  console.log("SEACRCHHHHHHHHHH", body);

  if (!searchTerm) return NextResponse.json({ status: 400, data: "Please enter some value" });
  response = await axios.get(`https://api.pexels.com/v1/search?query=${body?.searchTerm}&per_page=12`, {
    headers: {
      Authorization: "563492ad6f91700001000001f73f60ae7a694c0199e4f8e0121cc179",
    },
  });

  console.log(response?.data);
  return NextResponse.json({ status: response?.status, data: response?.data });
}
