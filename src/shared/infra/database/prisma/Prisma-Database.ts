import { PrismaClient, dotenv } from '../../../../deps.ts';

import type { Database } from 'shared/@types/database/index.d.ts';

// * ---------------------------------------------------------------------- * //

class PrismaDatabase implements Database {
  private envVars = dotenv.loadSync();

  prisma = new PrismaClient({
    datasources: {
      db: {
        url: this.envVars.DATABASE_URL
      }
    }
  });

  async createConnection(): Promise<void> {
    await this.prisma.$connect();
  }
}

// * ---------------------------------------------------------------------- * //

export { PrismaDatabase };
