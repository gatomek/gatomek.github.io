import type {ReactNode} from "react";

export interface Origin {
    name: string;
    url: string;
}

export interface ApplicationProps {
    origins: Origin[];
    children: ReactNode;
}
