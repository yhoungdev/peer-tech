"use client";
import IndexLayout from "@/layouts/indexLayout";
import CryptoDashboard from "@/app/components/sections/chatCryptoDashboard";
import Message from "@/app/components/sections/chat/message";

export default function ChatPage() {

    return (
        <IndexLayout>
            <div className=" md:w-[830px] bg-dark w-full mx-auto
                h-[608px] rounded-lg">
               <div className={'flex gap-6 '}>
                   <div className={'w-[60%]'}>
                       <Message/>
                   </div>
                   <CryptoDashboard/>
               </div>
            </div>
        </IndexLayout>
    );
}

