import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        requires: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastLogin: {

        type: Date,
        default: Date.now
    },
    isVarified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    varificationToken: String,
    verificationTokenExpiresAt: Date,
}, {timestamps: true})

export const User = mongoose.model('User', UserSchema);
