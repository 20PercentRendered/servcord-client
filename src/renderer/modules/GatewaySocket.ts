/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-var-requires */

import Logger from './Logger';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const heartbeats = require('heartbeats');

export default class GatewaySocket {
  url: string;

  encoding: 'json' | 'etf';

  version: string;

  ready: boolean;

  connected: boolean;

  wsConn: WebSocket;

  heartbeat: any;
  
  logger: Logger;

  constructor(url: string, encoding: 'json' | 'etf', version: string) {
    this.url = url;
    this.encoding = encoding;
    this.version = version;
    this.connected = false;
    this.ready = true;
    this.logger = new Logger(`GatewaySocket(${url})`);
  }

  async connect(): Promise<boolean> {
    if (this.ready) {
      this.wsConn = new WebSocket(`${this.url}`
      + `?v=${this.version}`
      + `&encoding=${this.encoding}`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.wsConn.onmessage = this.onMessage.bind(this);
      return new Promise((resolve, reject) => {
        this.wsConn.addEventListener('open', () => {
          this.connected = true;
          resolve(true);
        }); 
        this.wsConn.addEventListener('error', (e) => {
          reject(e);
        }); 
      });
    } 
    return Promise.resolve(false);
  }

  // work in progress
  private onMessage(ws: WebSocket, ev: MessageEvent<any>) {
    const data = JSON.parse(ev.data);
    switch (data.op) {
      case 10:
        this.heartbeat = heartbeats.createHeart(data.d.heartbeat_interval);
        break;
      default:
        this.logger.warn(`Unhandled op: ${data.op}`);
    }
  }
}
