import axios from 'axios';
import GatewaySocket from './GatewaySocket';
import Logger from './Logger';

type GatewayQueryResponse = {
    url: string;
    version?: string;
}
/**
 * A class that handles gatewaySocket connections and REST api:s for a server.
 */
export default class Connection {
    serverAddress: string;

    /**
     * The Gateway of the connection. 
     */
    gatewaySocket: GatewaySocket;

    /**
     * The token for this connection.
     */
    token: string;

    /**
     * The version of the REST api.
     */
    apiVersion: string;

    private logger: Logger;

    constructor(serverAddress: string, apiVersion: string) {
      this.serverAddress = serverAddress;
      this.apiVersion = apiVersion;
      this.logger = new Logger(`Connection (${serverAddress})`);
    }

    async connect(): Promise<boolean> {
      const apiResponse = await axios.get<GatewayQueryResponse>(
        `${this.serverAddress}/api/${this.apiVersion}/gateway`,
      );
      if (apiResponse.status !== 200) {
        const e = new Error('Failed to retrieve gateway url, cannot connect to server.');
        this.logger.error(e);
        throw e;
      }
      this.gatewaySocket = new GatewaySocket(apiResponse.data.url, 'json', '8');
      return this.gatewaySocket.connect();
    }

    // eslint-disable-next-line class-methods-use-this
    async authenticate(token: string): Promise<boolean> {
      return Promise.resolve(false);
      // this.gatewaySocket.send
    }
}
