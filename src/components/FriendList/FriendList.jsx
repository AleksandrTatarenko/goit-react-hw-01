import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return <div className={css.friends}>
        <ul className={css.friend_list}>
            {friends.map(friend => (
                <li className={css.item}>
                    <FriendListItem key={friend["id"]}
                    avatar={friend["avatar"]}
                    name={friend["name"]}
                    isOnline={friend["isOnline"]}
                />
                </li>
            ))}
        </ul>
    </div>
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(PropTypes.object),
}