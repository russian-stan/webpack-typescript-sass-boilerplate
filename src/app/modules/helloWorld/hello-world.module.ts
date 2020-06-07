export default class HelloWorldModule {
  constructor(private message: string) {
  }

  printMessage() {
    console.log(this.message);
  }
}
