import axios from 'axios';
import Connection from './Connection';
import GatewaySocket from './GatewaySocket';
import Logger from './Logger';

/**
 * A class that handles all connections.
 */
type VersionQueryResponse = {
  version: string
}
const DEFAULT_API_VERSION = 'v8';
export default class ConnectionManager {
    private connections: Connection[];

    private logger: Logger;

    /**
     * 
     * @param serverAddress The address of the server to connect to
     * @returns The index that you can use to retrieve the connection.
     */
    async createConnection(serverAddress: string): Promise<number> {
      try {
        const value = (
          await axios.get<VersionQueryResponse>(
            `${serverAddress}/api/apiversion`,
          )
        ).data;
        return this.connections.push(
          new Connection(serverAddress, value.version),
        ) - 1;
      } catch (e) {
        this.logger.error('Failed to retrieve api version for server address: '
        + `${serverAddress}`);
        this.logger.error(e);
        this.logger.error('Attempting to use default api version '
        + `(${DEFAULT_API_VERSION})`);
        return this.connections.push(
          new Connection(serverAddress, DEFAULT_API_VERSION),
        ) - 1;
      }
    }

    async connect(index: number): Promise<boolean> {
      return this.connections[index].connect();
    }

    async authenticate(index: number, token: string): Promise<boolean> {
      return this.connections[index].authenticate(token);
    }

    constructor() {
      this.logger = new Logger('ConnectionManager');
      this.connections = new Array<Connection>();
    }
}
