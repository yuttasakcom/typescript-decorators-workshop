export function SocketIO(event: string) {
  return function (constructor: Function) {
    console.log(event, constructor);
  };
}
