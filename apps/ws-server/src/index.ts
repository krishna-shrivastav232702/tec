import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    try {
        const user = await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });
        console.log("User created:", user);
    socket.send("Hi there you are connected to the server");
    }catch(error){
        console.error("Error creating user:", error);
    }
})