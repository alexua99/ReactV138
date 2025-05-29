import UsersCard from './component/UsersCard/UsersCard'
import { Users } from './data/Users'


export default function App() {


    // const users = [
    //     { id: 1, name: "Пользователь 1", age: 25, email: "user1@example.com" },
    //     { id: 2, name: "Пользователь 2", age: 30, email: "user2@example.com" },
    //     { id: 3, name: "Пользователь 3", age: 22, email: "user3@example.com" },
    //     { id: 4, name: "Пользователь 4", age: 27, email: "user4@example.com" },
    //     { id: 5, name: "Пользователь 5", age: 29, email: "user5@example.com" }
    // ]

    // console.log(Users);


    // const usersCatd = Users.map(item => <li>{item.name}</li>)


    const usersList = Users.map(item => (
        item.age >= 18 ? (
            <UsersCard user={item} />
        ) : ''
    ))


    return (
        <>
            <h1>Users</h1>

            Old
            {/* <ul>
                {
                    Users.map(item => (
                        <li key={item.id}>
                            <h5>{item.name}</h5>
                            <p>{item.age}</p>
                        </li>
                    ))
                }
            </ul> */}
            <hr />
            Version v2
            {/* <ul>
                {usersCatd}
            </ul> */}

            Version v3
            <hr />

            {/* <UsersCard user={Users[0]} /> */}

            {usersList ? usersList : <h3>Error</h3>}

        </>
    )
}