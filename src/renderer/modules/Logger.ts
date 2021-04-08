/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export default class Logger {
    public static default: Logger = new Logger('default');

    public readonly name: string;

    constructor(name: string) {
      this.name = name;
      if (name === 'default') {
        this.info('Initialized default logger');
      }
    }

    private log(obj: any, method: string): void {
      if (typeof obj === 'string') {
        (<any>console)[method](`%c${this.prefix()} %c${obj}`, Logger.style(), obj);
      } else if (typeof obj === 'object') {
        if (obj.message) {
          if (obj.name) {
            (<any>console)[method](obj);
            return;
          }
        }
        console.table(obj);
      } else {
        (<any>console)[method](obj);
      }
    }

    info(obj: any): void {
      this.log(obj, 'log');
    }

    warn(obj: any): void {
      this.log(obj, 'warn');
    }

    error(obj: any): void {
      this.log(obj, 'error');
    }

    private prefix(): string {
      return `[${this.name}]`;
    }

    private static style(): string {
      return 'color: #bada55; font-weight: bold;';
    }
}
const defaultLogger = new Logger('default');
export { defaultLogger };
