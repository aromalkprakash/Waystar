import User from "../models/user.model.js";

export const updateUserProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }).select("password");
        if (!user){
            return res.status(401).json({ error: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserProfile: ", error.message)
        res.status(500).json({ error: error.message });
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if (id === req.user._id.toString()) {
            return res.status(400).json({ error: "You can't follow/UnFollow yourself" });
        }
        if (!userToModify || !currentUser) return res.status(400).json({ error: 'User not found' });

        const isFollowing = currentUser.following.user(id);

        if (isFollowing) {
            // UnFollow the user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            res.status(200).json({ message: "User Unfollowed Successfully" });
        } else {
            // Follow the user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            res.status(200).json({ message: "User followed Successfully" });

            // Send a notification to that User
       }


    } catch (error) {
        console.log("Error in followUnfollowUser: ", error.message)
        res.status(500).json({ error: error.message });
    }
}