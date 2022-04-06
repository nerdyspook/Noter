import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
    {
        _id: uuid(),
        firstName: "Susanto",
        lastName: "Mahato",
        email: "sushantomahato1@gmail.com",
        password: "123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },

    {
        _id: uuid(),
        firstName: "test1",
        lastName: "test2",
        email: "test@gmail.com",
        password: "test",
        createdAt: formatDate(),
        updatedAt: formatDate(),
    },
];
