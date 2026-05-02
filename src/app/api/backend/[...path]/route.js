const FORWARDED_HEADERS = [
  "accept",
  "content-type",
  "user-agent",
  "authorization",
];

function getBackendUrl(request, path) {
  const baseUrl = process.env.BACKEND_BASE_URL;

  if (!baseUrl) {
    throw new Error("BACKEND_BASE_URL is not configured");
  }

  const requestUrl = new URL(request.url);
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const targetUrl = new URL(path.join("/"), normalizedBaseUrl);
  targetUrl.search = requestUrl.search;

  return targetUrl;
}

function getForwardedHeaders(request) {
  const headers = new Headers();

  FORWARDED_HEADERS.forEach((key) => {
    const value = request.headers.get(key);
    if (value) headers.set(key, value);
  });

  return headers;
}

async function proxyRequest(request, { params }) {
  try {
    const { path } = await params;
    const targetUrl = getBackendUrl(request, path);
    const method = request.method;
    const hasBody = !["GET", "HEAD"].includes(method);

    const response = await fetch(targetUrl, {
      method,
      headers: getForwardedHeaders(request),
      body: hasBody ? request.body : undefined,
      duplex: hasBody ? "half" : undefined,
      cache: "no-store",
    });

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (error) {
    console.error("Backend proxy error:", error);

    return Response.json(
      { message: "Unable to reach the backend service." },
      { status: 502 }
    );
  }
}

export const dynamic = "force-dynamic";

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const PATCH = proxyRequest;
export const DELETE = proxyRequest;
