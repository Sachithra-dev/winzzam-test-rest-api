const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Import the Schema object

const UserSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        firstName: { type: String, required: false },
        lastName: { type: String, required: false },
        userRole: { type: String, required: false, default: "Student" },
        isProfileComplete: { type: Number, required: false, default: 0 },
        registerDate: { type: Date, required: false },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, required: false },
        district: { type: String, required: false },
        school: { type: String, required: false },
        ExamBatch: { type: String, default: false },
        profile: {
            type: String,
            required: true,
            default: "sample-profile-image-path"
        },
        joinedExams: [
            {
                tutionMaster: {
                    type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId here
                    ref: "User" // Reference the "User" model
                },
                month: {
                    type: Schema.Types.ObjectId, // Use Schema.Types.ObjectId here
                    ref: "Month" // Reference the "Month" model
                },
                status: { type: Number, required: false }
            }
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
