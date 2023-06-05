import { model, Schema } from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value: string)=> /^\S+@\S+\.\S+$/.test(value) // Validate the email format
        }
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    imgUrl: {
        type: String,
        default: ''
    }
})

export default model('userModel', userSchema)