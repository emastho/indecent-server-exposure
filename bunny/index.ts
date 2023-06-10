let here = JSON.stringify({ okay: "why not" });

Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/")
      return await new Response(here, {
        headers: {
          "content-type": "application/json",
        },
      });
    return new Response("uh oh");
  },
});
