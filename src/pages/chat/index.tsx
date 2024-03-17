import { List } from "@/lib";
import { ProfileCard } from "@/lib/card";

export default function Inbox() {
  return (
    <div className="flex">
      <div className="inbox w-2/12 pt-16 px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2">
          <List>
            <button className="w-full text-start py-4 pl-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <ProfileCard
                profileName="fadlim"
                text="hello! how are you?"
                desc="12 days ago"
                imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
              ></ProfileCard>
            </button>

            <ProfileCard
              className="py-4 pl-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              profileName="fadlim"
              text="hello! how are you?"
              imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
            ></ProfileCard>
            <ProfileCard
              className="py-4 pl-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              profileName="fadlim"
              text="hello! how are you?"
              imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
            ></ProfileCard>
            <ProfileCard
              className="py-4 pl-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              profileName="fadlim"
              text="hello! how are you?"
              imageURL="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80"
            ></ProfileCard>
          </List>
        </ul>
      </div>
      <div className="flex justify-center items-center text-3xl font-bold bg-sky-100 w-10/12 dark:bg-gray-900 dark:text-white">
        Choose a message
      </div>
    </div>
  );
}
