import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className=" col-span-2 mt-2 px-2 hidden lg:inline">
      <div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className=" h5 w-5 text-gray-400" />
        <input
          className=" flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Widgets;
