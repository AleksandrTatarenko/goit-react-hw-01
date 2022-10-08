import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return <div className={css.friends}>
        <ul className={css.friend_list}>
            {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    />
            ))}
        </ul>
    </div>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number }))
}
