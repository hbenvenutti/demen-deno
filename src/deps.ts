import * as dotenv from "https://deno.land/std/dotenv/mod.ts";

// @deno-types="shared/infra/database/prisma/generated/client/index.d.ts"
import { PrismaClient } from 'shared/infra/database/prisma/generated/client/index.js'
// import { PrismaClient } from './shared/infra/database/prisma/generated/client/index.js'


// * ---------------------------------------------------------------------- * //

export { PrismaClient };
export { dotenv };
