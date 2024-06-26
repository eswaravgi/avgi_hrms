import "./topBox.scss"
import {topDealUsers} from "../../data.tsx"

const TopBox = () => {
    return (
        <div className="topBox">
            <h1>TopClients</h1>
            <div className="list">
                {topDealUsers.map(user => (
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt="" />
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <span className="useremail">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBox;