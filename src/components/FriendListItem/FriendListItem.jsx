import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<div className={css.friend}>
            <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </div>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};
