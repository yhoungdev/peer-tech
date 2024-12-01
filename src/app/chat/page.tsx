"use client";
import IndexLayout from "@/layouts/indexLayout";
import CryptoDashboard from "@/app/components/sections/chatCryptoDashboard";
import Message from "@/app/components/sections/chat/message";
import ChatHeader from "@/app/components/sections/chat/chatHeader";
import React from "react";

export default function ChatPage() {
  return (
    <IndexLayout>
      <div
        className=" w-full md:w-[830px] bg-dark  mx-auto
               md:max-h-[90vh] rounded-lg"
      >
        <ChatHeader />
        <div className={"flex md:items-center flex-col md:flex-row gap-6 "}>
          <div className={"w-[60%]"}>
            <Message />
          </div>
          <CryptoDashboard />
        </div>
      </div>
    </IndexLayout>
  );
}
