
import { PrismaDatabase } from "shared/infra/database/prisma/Prisma-Database.ts";

import type { Database } from 'shared/@types/database/index.d.ts';

// * ---------------------------------------------------------------------- * //

const database: Database = new PrismaDatabase();

// * ---------------------------------------------------------------------- * //

export { database };
