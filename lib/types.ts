import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { CoreMessage } from "ai";

export interface SidebarItem {
    links: Array<{
        label: string;
        href: string;
        icon?: LucideIcon;
    }>;
    extras?: ReactNode;
}

export type Message = CoreMessage & {
    id: string
}

export interface Chat extends Record<string, any> {
    id: string
    title: string
    createdAt: Date
    userId: string
    path: string
    messages: Message[]
    sharePath?: string
}

export type ServerActionResult<Result> = Promise<
    | Result
    | {
        error: string
    }
>

export interface Session {
    user: {
        id: string
        email: string
    }
}

export interface AuthResult {
    type: string
    message: string
}

export interface User extends Record<string, any> {
    id: string
    email: string
    password: string
    salt: string
}