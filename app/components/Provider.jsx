'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
)

export default Provider;
// we are using higher order components here