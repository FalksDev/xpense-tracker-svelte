import { SvelteKitAuth } from '@auth/sveltekit';
import GoogleProvider from '@auth/core/providers/google';
import {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
} from '$env/static/private';
import type { Adapter } from '@auth/core/adapters';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from '$lib/server/database/db.server';

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(db) as Adapter,
    session: {
        strategy: "database",
        generateSessionToken: () => {
            return crypto.randomUUID();
        }
    },
    callbacks: {
      async session({session, token, user}) {
        session = {
            ...session,
            user: {
                id: user.id,
                ...session.user
            }
        }
        return session
      }
    },
    providers: [GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })]
});
