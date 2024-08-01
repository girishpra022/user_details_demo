
import  request  from "supertest";
import app from "../src/server/app";



describe("User API endpoints", () => {
  it("should return validation error when input is empty", async () => {
    const response = await request(app).post("/api/v1/users").send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: [
        "First Name required",
        "Last name required",
        "Email required",
      ],
    });
  });

  it("should create a new user", async () => {
    const userData = {
      firstName: "John",
      lastName: "Snow",
      email: "John.snow@test.com",
    };

    const response = await request(app).post("/api/v1/users").send(userData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Data saved successfully.");
    expect(response.body.data.user.firstName).toBe(userData.firstName);
    expect(response.body.data.user.lastName).toBe(userData.lastName);
    expect(response.body.data.user.email).toBe(userData.email);
  });

  it("should show duplicate email error for existing email", async () => {
    const newUser = {
      firstName: "John",
      lastName: "Snow",
      email: "John.snow@test.com",
    };

    await request(app).post("/api/v1/users").send(newUser);

    
    const response = await request(app).post("/api/v1/users").send(newUser);

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      success: false,
      message: "Email already registered.",
    });
  });

});
