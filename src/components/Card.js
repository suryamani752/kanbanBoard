import React from "react";
import styles from "./Card.module.css";
const Card = ({ userName, tickets, userId }) => {
  return (
    
    <div className={styles.MainCardConatiner}>

      <h2 className={styles.userName}>{userName}</h2>
      {tickets.map((ticket) => (
        <>
          {userId === ticket.userId && (
            <>
            <div className={styles.cardContainer}>
              <h3>{ticket.id}</h3>
              <h4>{ticket.title}</h4>
              <div className={styles.tag}>
                <p>{ticket.tag[0]}</p>
              </div>
            </div>
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Card;
