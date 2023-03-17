const emailService = require("../services/emailService");

describe("emailService", () => {
  test("should send email", async () => {
    const email = "test@example.com";
    const message = "Test message";

    const result = await emailService.sendEmail(email, message);

    expect(result).toEqual({ success: true });
  });
});
