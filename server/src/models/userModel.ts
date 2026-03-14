import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            capitalize: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                },
                message: "Please enter a valid email"
            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: [6, "Password must be at least 6 characters long"],
        }
    }
)

export const User = mongoose.model("User", userSchema);