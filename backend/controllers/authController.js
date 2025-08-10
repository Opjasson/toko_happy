import Users from "../models/user.js";
import argon2 from "argon2";

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({
            message: "username yang anda masukan salah",
        });
    }
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
        return res.status(401).json({ message: "password salah" });
    }
    res.status(201).json({ message: "Login succesfully", response: user });
};

export const forgotPassword = async (req, res) => {
    const { username, password, confPassword } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({
            message: "username yang anda masukan salah",
        });
    }
    res.status(200).json(user);
};