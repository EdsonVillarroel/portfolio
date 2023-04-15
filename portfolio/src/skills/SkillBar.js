import React from 'react';
import { FaCode } from 'react-icons/fa';
import { GiDatabase } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';

const SkillBar = ({ skill }) => {
  const { name, percentage, icon } = skill;

  const skillBarStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const skillNameStyles = {
    fontWeight: 'bold',
    marginRight: '10px',
  };

  const barContainerStyles = {
    width: '100%',
    height: '10px',
    backgroundColor: '#e6e6e6',
    borderRadius: '10px',
    position: 'relative',
  };

  const barFillStyles = {
    height: '100%',
    backgroundColor: '#007bff',
    borderRadius: '10px',
  };

  const percentageStyles = {
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const iconStyles = {
    marginRight: '10px',
  };

  let iconComponent = null;
  switch (icon) {
    case 'FaCode':
      iconComponent = <FaCode style={iconStyles} />;
      break;
    case 'GiDatabase':
      iconComponent = <GiDatabase style={iconStyles} />;
      break;
    case 'IoIosRocket':
      iconComponent = <IoIosRocket style={iconStyles} />;
      break;
    default:
      break;
  }

  return (
    <div className="skill-bar" style={skillBarStyles}>
      <div className="skill-bar__icon">
        {iconComponent}
      </div>
      <div className="skill-bar__name" style={skillNameStyles}>
        {name}
      </div>
      <div className="skill-bar__bar" style={barContainerStyles}>
        <div className="skill-bar__fill" style={{ ...barFillStyles, width: `${percentage}%` }} />
      </div>
      <div className="skill-bar__percentage" style={percentageStyles}>
        {percentage}%
      </div>
    </div>
  );
};

export default SkillBar;