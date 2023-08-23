import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

// Covering for a turbo bug!
// eslint-disable-next-line turbo/no-undeclared-env-vars
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
