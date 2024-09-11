import React, { useState } from 'react';
import axios from 'axios';
import './EditableFields.css'; // Assuming you have a CSS file for styling
import { EditIcon,SaveIcon} from './icons/Icon'

const EditableFields = () => {
  const initialFields = {
    Shop: 'Value 1',
    Location: 'Value 2',
    Owner: 'Value 3',
    Mobile1: 'Value 4',
    Mobile2: 'Value 5',
    Time: 'Value 6',
    No_Vehicles: 'Value 7',
    GSTIN: 'Value 8',
  };

  const [fields, setFields] = useState(initialFields);
  const [editMode, setEditMode] = useState({
    Shop: false,
    Location: false,
    Owner: false,
    Mobile1: false,
    Mobile2: false,
    Time: false,
    No_Vehicles: false,
    GSTIN: false,
  });

  const handleFieldChange = (e, fieldName) => {
    setFields({
      ...fields,
      [fieldName]: e.target.value,
    });
  };

  const toggleEditMode = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: !editMode[fieldName],
    }
  );

  console.log(editMode);

    
  };

  return (
    <div className="editable-fields">
      {Object.keys(fields).map((field) => (
        <div key={field} className="field-container">
          <label className="field-label">{field.padEnd(14,' ')}</label>
          {editMode[field] ? (
            <input
              type="text"
              value={fields[field]}
              onChange={(e) => handleFieldChange(e, field)}
              className="field-input"
            />
          ) : (
            <span className="field-text">{fields[field]}</span>
          )}
          <button onClick={() => toggleEditMode(field)} className="button-format">
            {editMode[field] ? <SaveIcon/> : <EditIcon/>}
          </button>
        </div>
      ))}
    </div>
  );
  
};

export default EditableFields;
