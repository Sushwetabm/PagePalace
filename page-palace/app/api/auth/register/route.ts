import { z } from "zod";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    displayName: z
        .string()
        .min(3, { message: "Display name must be at least 3 characters" })
        .max(30, { message: "Display name must be at most 30 characters" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
});

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWD,
    port: 5432
});

export async function POST(req: Request) {
    try {
        await client.connect();
        const data = await req.json();
        const { email, displayName, password } = schema.parse(data);
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `
            INSERT INTO users (email, display_name, password)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const values = [email, displayName, hashedPassword];

        const res = await client.query(query, values);
        await client.end();

        const user = res.rows[0];
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        await client.end();
        return new NextResponse("Internal Error", { status: 500 });
    }
}
