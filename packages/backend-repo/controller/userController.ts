import { Request, Response } from "express";
import { User } from "shared/user";
import { UserRepository } from "../repository/userRepository";
import { StatusCodes } from "http-status-codes";

export const UserController = {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await UserRepository.getAllUsers();

            res.status(StatusCodes.OK).json({
                message: "Success",
                data: users,
            });
        } catch (e) {
            console.log(e);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong !",
                error: e,
            });
        }
    },
    async getUserById(req: Request, res: Response) {
        try {
            const extractedToken = req.user;

            const user = await UserRepository.getUserById(
                extractedToken?.uid ?? ""
            );

            if (!user) {
                res.status(404).json({
                    message: "User Not Found !",
                });
            }

            res.status(StatusCodes.OK).json({
                message: "Success",
                data: user,
            });
        } catch (e) {
            console.log(e);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong !",
                error: e,
            });
        }
    },

    async updateUser(req: Request, res: Response) {
        try {
            const extractedToken = req.user;

            const user = await UserRepository.getUserById(
                extractedToken?.uid ?? ""
            );
            const { fullName, email } = req.body;

            const updateUser: Partial<User> = {
                fullName,
                email,
            };

            await UserRepository.updateUser(user?.id ?? "", updateUser);

            res.status(StatusCodes.OK).json({
                message: "Success",
                data: user,
            });
        } catch (e) {
            console.log(e);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Something went wrong !",
                error: e,
            });
        }
    },
};
