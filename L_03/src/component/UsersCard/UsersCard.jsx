import './style.css'


export default function UsersCard({ user }) {


    return (

        <div key={user.id} className="item">
            <img src={`./img/${user.img}.png`} alt={user.img} width='40' />
            <h4 className={`${user.age >= 18 ? 'green' : 'red'}`}>Імя: {user.name}</h4>
            <p>Вік: {user.age}</p>
            <p>Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
        </div>

    )
}