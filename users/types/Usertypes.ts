import mongoose from "mongoose";

export interface UserInterface {
    _id: mongoose.Schema.Types.ObjectId;
    fullName: string;
    email: string;
    username: string;
    role: string;
    image: string;
    googleId: string | null;
    password: string;
    bio: string;
    likedMovies: mongoose.Schema.Types.ObjectId[];
    followers: mongoose.Schema.Types.ObjectId[];
    following: mongoose.Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
  }