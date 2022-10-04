export class CustomError extends Error {
  status = 400;
  constructor(status: number, message: string) {
    super(message);

    this.status = status;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  getErrorMessage() {
    return "Something went wrong: " + this.message;
  }
}

export const createError = (status: any, message: any) => {
  const err = new CustomError(500, "Something went wrong");
  err.status = status;
  err.message = message;
  return err;
};
