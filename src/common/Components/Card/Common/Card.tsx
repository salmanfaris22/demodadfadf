import React from 'react';
import classes from './Card.module.scss';

interface CartCardProps {
  imageUrl: string;
  label: string;
  totalcount: number;
}

const Card: React.FC<CartCardProps> = ({ imageUrl, label, totalcount }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardIcon}>
      <img src={imageUrl} alt={label} className={classes.icon} />
      </div>
   <div className={classes.textmain}>
   <div className={classes.text}>{label}</div>
   <div className={classes.count}>{totalcount}</div>
   </div>
    </div>
  );
};

export default Card;
