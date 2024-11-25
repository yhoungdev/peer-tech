import React from 'react';
import GroupItems from "@/app/components/misc/groupItems";

function UnclaimedGroup(props) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex my-4 space-x-[3em] px-4">
                {[1, 2, 3, 4, 1, 1, 5].map((item, index) => (
                    <GroupItems key={index} />
                ))}
            </div>
        </div>
    );
}

export default UnclaimedGroup;
