import { Avatar } from "./Avatar";
import { UserInfo } from "./UserInfo";

export const UserCard = () => {

    const actors = [
        {
            name: "Prayas Jain",
            role: "Developer"
        },
        {
            name: "Hemanth",
            role: "Developer"
        },
        {
            name: "Aarushi",
            role: "Developer"
        },
        {
            name: "Katish",
            role: "Developer"
        },
        {
            name: "Vineetha",
            role: "Developer"
        },
        {
            name: "Vinod",
            role: "Developer"
        }
    ]

    return (
        <div className="grid grid-cols-2">
            {actors.map((actor, index) => {
                return (
                    <div key={index}>
                        <Avatar imageUrl="pp.jpg"></Avatar>
                        <UserInfo name={actor.name} role={actor.role}></UserInfo>
                    </div>
                )
            })}
        </div>
    )
}