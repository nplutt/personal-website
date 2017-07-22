export class SignUpModel {
  constructor(
    public email: string = null,
    public password: string = null,
    public confirmationNumber: string = null
  ) { }
}
