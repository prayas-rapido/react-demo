import { UserCard } from "./card/UserCard";
import { Counter } from "./counter/counter";
import { Greetings } from "./greetings";

export default function Home() {

  const names = [
    "Prayas Jain",
    "Hemanth",
    "Vinod",
    "Aarushi",
    "Vineetha",
    "Katish",
    "Rajesh"
  ]

  return (
    <div>
      {/* {names.map((name, index) => <Greetings key={index} name={name} />)} */}
      {/* <UserCard /> */}
      <Counter/>
    </div>
  );
}
