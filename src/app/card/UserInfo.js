export const UserInfo = ({ name, role }) => {
    return (
        <div>
            <h1 className="text-2xl">{name}</h1>
            <h3 className="text-lg">{role}</h3>
        </div>
    )
}