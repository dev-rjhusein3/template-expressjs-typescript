import { Request } from "express";

const HOSTS = ['localhost:8080', 'yoursite.com'];

export const HostAllowed = (req: Request): boolean => {
    return HOSTS.includes(req.header("host") ?? 'NULL')
}
