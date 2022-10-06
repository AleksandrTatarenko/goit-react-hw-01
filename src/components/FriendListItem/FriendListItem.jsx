import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
        <div>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};
