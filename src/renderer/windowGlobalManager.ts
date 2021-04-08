/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

export default class WindowGlobals {
  static set(name: string, func: any): void {
    (window as any)[name] = func;
  }

  static clear(name: string): void {
    delete (window as any)[name];
  }

  static get<T1>(name: string) {
    return <T1>(window as any)[name];
  }
}
