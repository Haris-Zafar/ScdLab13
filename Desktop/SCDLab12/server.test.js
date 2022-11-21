const request = require("jest");

const app = require("./routes/User");
const mongoose = require("mongoose");

describe("Testt the root path", () => {
    test("It should respond the get method ", () => {
        const response = request(app).post("http:localhost:8000/User/add").send({
            "Name": "Haris",
            "Email": "haris@gmail.com",
            "Age": "20",
            "Contact": "1237832743"
        })
        expect(response.statusCode).toBe(200);
    })
})