const Blgomodel = require("../model/blog.model");

const GetSinglePost = async (req, res) => {
    try {
        const postId = req.params.id;

        const Post = await Blgomodel.findById(postId)
            .populate({
                path: "comments",
                populate: {
                    path: "userId"
                }
            });

        if (!Post) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        res.status(200).json({
            success: true,
            Post
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = { GetSinglePost };