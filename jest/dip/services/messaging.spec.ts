import { Messaging } from "./messaging";

const createSut = () => {
  return new Messaging();
};

describe("Messaging Service", () => {
  it("should return undefined", () => {
    createSut().sendMessage("Hello World");
  });

  it("should log the message to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const sut = createSut();
    const message = "Test Message";

    sut.sendMessage(message);

    expect(consoleSpy).toHaveBeenCalledWith("Mensagem enviada:", message);
    consoleSpy.mockRestore();
  });

  it('should call console.log with "Mensagem enviada: "and the message', () => {
    const consoleSpy = jest.spyOn(console, "log");
    const sut = createSut();
    const message = "Another Test Message";

    sut.sendMessage(message);

    expect(consoleSpy).toHaveBeenCalledWith("Mensagem enviada:", message);
  });
});
