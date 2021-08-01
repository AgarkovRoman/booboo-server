export declare function users(): Promise<{
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    roles: {
        id: number;
        value: string;
        description: string;
        createdAt: string;
        updatedAt: string;
        UserRoles: {
            id: number;
            roleId: number;
            userId: number;
        };
    }[];
    projects: {
        id: number;
        name: string;
        description: string;
        userId: number;
        createdAt: string;
        updatedAt: string;
    }[];
}[]>;
