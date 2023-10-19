import { PrismaClient } from '@prisma/client';

// Exposes PrismaClient as singleton over the application
export const db = new PrismaClient();
