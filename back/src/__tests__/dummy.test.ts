import { app } from "../app";

import request from "supertest";

describe("GET /dummy", () => {
	it ("returns 200 with message pasta with no sauce", async() => {
		const res = await request(app)
			.get("/dummy");

		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({ message: 'pasta with no sauce' });
	});
});