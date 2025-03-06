import { fromHono } from "chanfana";
import { Hono } from "hono";
import { UserList } from "endpoints/userList";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/userList", UserList);

// Export the Hono app
export default app;
