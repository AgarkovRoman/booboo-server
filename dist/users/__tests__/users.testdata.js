"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
async function users() {
    return [
        {
            id: 8,
            name: 'Roman',
            email: 'test@ru.ru',
            password: '$2a$05$AbN7kcRQRPuSLhTw8boeEetf/p0dt1Xn/5Bm/yOEJ7Mct48ph4RYm',
            createdAt: '2021-07-01T12:49:48.225Z',
            updatedAt: '2021-07-01T12:49:48.225Z',
            roles: [
                {
                    id: 1,
                    value: 'ADMIN',
                    description: 'Administrator, have full access',
                    createdAt: '2021-06-22T06:57:52.876Z',
                    updatedAt: '2021-06-22T06:57:52.876Z',
                    UserRoles: {
                        id: 6,
                        roleId: 1,
                        userId: 8,
                    },
                },
            ],
            projects: [
                {
                    id: 10,
                    name: 'Sport 2',
                    description: 'Project for sport',
                    userId: 8,
                    createdAt: '2021-07-05T20:27:29.024Z',
                    updatedAt: '2021-07-05T20:27:29.024Z',
                },
                {
                    id: 8,
                    name: 'Work',
                    description: 'Project for working tasks',
                    userId: 8,
                    createdAt: '2021-07-05T20:20:41.771Z',
                    updatedAt: '2021-07-05T20:20:41.771Z',
                },
            ],
        },
        {
            id: 9,
            name: 'Roman',
            email: 'test2@mail.ru',
            password: 'Test!123',
            createdAt: '2021-07-02T15:03:19.520Z',
            updatedAt: '2021-07-02T15:03:19.520Z',
            roles: [
                {
                    id: 2,
                    value: 'USER',
                    description: 'General role',
                    createdAt: '2021-06-23T19:56:59.441Z',
                    updatedAt: '2021-06-23T19:56:59.441Z',
                    UserRoles: {
                        id: 7,
                        roleId: 2,
                        userId: 9,
                    },
                },
            ],
            projects: [],
        },
        {
            id: 11,
            name: 'Roman',
            email: 'test3@mail.ru',
            password: '$2a$05$NcWkVVEDDSWCrn3QsBilOOdHitdEmx9W0svLaZn5C6.kEvuS17NUu',
            createdAt: '2021-07-03T07:55:59.030Z',
            updatedAt: '2021-07-03T07:55:59.030Z',
            roles: [
                {
                    id: 2,
                    value: 'USER',
                    description: 'General role',
                    createdAt: '2021-06-23T19:56:59.441Z',
                    updatedAt: '2021-06-23T19:56:59.441Z',
                    UserRoles: {
                        id: 8,
                        roleId: 2,
                        userId: 11,
                    },
                },
                {
                    id: 1,
                    value: 'ADMIN',
                    description: 'Administrator, have full access',
                    createdAt: '2021-06-22T06:57:52.876Z',
                    updatedAt: '2021-06-22T06:57:52.876Z',
                    UserRoles: {
                        id: 9,
                        roleId: 1,
                        userId: 11,
                    },
                },
            ],
            projects: [],
        },
        {
            id: 12,
            name: 'Roman1',
            email: 'test1@ru.ru',
            password: '$2a$05$U4jZrHeKzzLDAN1WnJNO3.Zt/Wmfc.9WMkAvKbfyvHux0UvUHPniS',
            createdAt: '2021-07-05T20:19:43.792Z',
            updatedAt: '2021-07-05T20:19:43.792Z',
            roles: [
                {
                    id: 2,
                    value: 'USER',
                    description: 'General role',
                    createdAt: '2021-06-23T19:56:59.441Z',
                    updatedAt: '2021-06-23T19:56:59.441Z',
                    UserRoles: {
                        id: 10,
                        roleId: 2,
                        userId: 12,
                    },
                },
            ],
            projects: [],
        },
    ];
}
exports.users = users;
//# sourceMappingURL=users.testdata.js.map