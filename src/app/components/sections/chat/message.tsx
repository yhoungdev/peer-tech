import React from 'react';
import ChatInput from "@/app/components/sections/chat/chatInput";
import ChatInterface from "@/app/components/sections/chat/messageBody";

function Message(props) {
    return (
        <div>
            <ChatInterface/>
            <ChatInput/>
        </div>
    );
}

export default Message;
