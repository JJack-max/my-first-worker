import { Bool, OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { User } from "../types";

export class UserList extends OpenAPIRoute {
  schema = {
    tags: ["userList"],
    summary: "Get user list",
    request: {
      params: z.object({
        // taskSlug: Str({ description: "Task slug" }),
      }),
    },
    responses: {
      "200": {
        description: "Returns user list",
        content: {
          "application/json": {
            schema: z.object({
              series: z.object({
                success: Bool(),
                result: z.object({
                  task: User,
                }),
              }),
            }),
          },
        },
      },
    },
  };

  async handle(c) {

    console.log(c);

    const response = await fetch("http://[2400:2410:38e1:2a00:7807:ff09:898f:9838]/user.json", {
      method: "get",
      headers: { "Header": "http://[2400:2410:38e1:2a00:7807:ff09:898f:9838]" },
    });

    if (!response.ok) {
      throw new Error('网络响应不是 OK');
    }

    let userList = await response.json();

    console.log(userList);

    return {
      success: true,
      user: userList,
    };
  }
}
