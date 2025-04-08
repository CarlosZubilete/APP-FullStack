import { useState } from "react";
import '../styleSheet/UserCard.css';

function UserCard(props){

  const {user} = props;

  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected(!selected);
  }

  return (
    <div onClick={handleSelected} className={`userCard ${(selected) ? 'select' : ''}`}>
      <p className='userCard__name'>{user.name}</p>
      <img src={user.avatar} className={'userCard__avatar'} />
    </div>
  )
}

export default UserCard;