
interface ICallback<T> {
  (arg: T): any;
}

interface ITmitter<T>{
  _listeners: T[]
  on(cb: ICallback<T>): void;
  off(cb?: ICallback<T>): void;
  trigger(arg: T): void;
}

export function tmitter<T>():ITmitter<T>;
