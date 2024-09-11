import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faHistory,faCheckCircle,faTrash, faEdit,faTimes,faCheck,faBan, faUnlockAlt} from '@fortawesome/free-solid-svg-icons';
import './Icon.css';

export const BellIcon = ({ notificationCount }) => {
  return (
    <div className="icon-position">
      <FontAwesomeIcon icon={faBell} className="bell-icon" />
      {notificationCount > 0 && (
        <span className="notification-count">{notificationCount}</span>
      )}
    </div>
  );
};
export const HomeIcon = () => {
  return (
    <div className="icon-position">
      <FontAwesomeIcon icon={faHome} className="home-icon" />
    </div>
  );
};

export const HistoryIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faHistory} className="history-icon" />
  </div>
);

export const AvailableIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faCheckCircle} className="available-icon" />
  </div>
);
export const DeleteIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faTrash} className="delete-icon" />
  </div>
);
export const EditIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faEdit} className="edit-icon" />
  </div>
);
export const CancelIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faTimes} className="cancel-icon" />
  </div>
);
export const SaveIcon = () => (
  <div className="icon-position">
    <FontAwesomeIcon icon={faCheck} className="save-icon" />
  </div>
);
