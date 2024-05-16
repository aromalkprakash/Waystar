import Notification from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
   try {
       const userId = req.user._id;

       const notifications = await Notification.find({ to: userId })
           .populate({
               path: "from",
               select: "username profileImg"
           });
       await Notification.updateMany({ to: userId }, { read: true });
       res.status(200).json(notifications);
   } catch (error) {
       console.log("Error in getNotifications controller", error);
       return res.status(500).json({ error: "Intervel Server Issue" });
   }
}

export const deleteNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        await Notification.deleteMany({ to: userId });

        res.status(200).json({message:"Notification deleted successfully"});
    } catch (error) {
        console.log("Error in control Notification function", error.message);
        res.status(500).json({ "Internal server issue": error });
    }
}
    