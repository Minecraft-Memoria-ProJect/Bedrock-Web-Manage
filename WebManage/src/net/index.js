import { http, HttpRequest, HttpRequestMethod } from "@minecraft/server-net"

import { Status } from './../world/index';

export async function PostStatus() {
    const req = new HttpRequest(URL + "/updateStatus");

    req.body = JSON.stringify(Status);

    req.method = HttpRequestMethod.Post;

    await http.request(req);
};