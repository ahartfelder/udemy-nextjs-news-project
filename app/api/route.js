export function GET(request) {
  return new Response("GET Hello world!", {
    headers: { "content-type": "text/plain" },
  });
}

export function POST(request) {
  return new Response("POST Hello world!", {
    headers: { "content-type": "text/plain" },
  });
}
