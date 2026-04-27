const Blgomodel = require("../model/blog.model");
const CommentModel = require("../model/comment.model");

const AddComment = async (req, res) => {
    try {
        const { postId, userId, comment } = req.body;

        // 1️⃣ Create new comment
        const newComment = new CommentModel({
            postId,
            userId,
            comment
        });

        await newComment.save();

        // 2️⃣ Add comment ID into blog
        const blogPost = await Blgomodel.findById(postId);
        if (!blogPost) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        blogPost.comments.push(newComment._id);
        await blogPost.save();

        // 3️⃣ 🔥 IMPORTANT: Populate userId
        const populatedComment = await newComment.populate({
            path: "userId",
            select: "FullName profile" // optional fields
        });

        // 4️⃣ Send populated comment
        res.status(201).json({
            success: true,
            message: 'Comment added successfully',
            comment: populatedComment
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

module.exports = { AddComment };