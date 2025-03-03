// import Conversation from "../models/conversation.model.js";
// //import message  1-19-50

// export const sendMessage = async(req, res) => {
//     try {
//         const { message } = req.body;
//         const { id: receiverId } = req.params;
//         const senderId = req.user._Id

//         let Conversation = await Conversation.findOne({
//             participants: {$all: [senderId,receiverId]},
//         })

//         if(!Conversation){
//             Conversation = await Conversation.findOne({
//                 participants: [senderId,receiverId],
//             })
//         }

//         const newMessage =  new message({
//             senderId,
//             receiverId,
//             message,
//         });

//         if (newMessage){
//             Conversation.message.push (newMessage._Id);
//         }
//         res.status(201).json(newMessage);

//     } catch (error) {
//         console.log("Error in sendingMessage controller: ",error.message)
//         res.status(500).json({ error: "internal server error"});
        
//     }
// }

import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"; // Assuming you have a Message model defined

export const sendMessage = async (req, res) => {
    try {
        const { message} = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // Corrected property access

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });

            // if (!conversation) {
            //     // If conversation doesn't exist, create a new one
            //     conversation = new Conversation({
            //         participants: [senderId, receiverId],
            //     });
            //     await conversation.save();
            // }
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,// Changed variable name to 'text'
        });

        //SOCKET IO FUNCTIONALITY WILL GO HERE 

        // await newMessage.save();

        // Add the message to the conversation
        conversation.messages.push(newMessage._id);

        // await conversation.save();
        // await newMessage.save();


        //this will run in parallel
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getMessages = async (req,res) => {
    try {
        const {id: userChatId}= req.params;
        const senderId = req.user._id;
        const { id: receiverId } = req.params;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId]},
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessages controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
        
    }
}

