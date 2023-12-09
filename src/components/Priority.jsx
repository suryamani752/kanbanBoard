import React from "react";
import styles from "./Priority.module.css";

const Priority = ({ tickets }) => {
  return (
    <div>
      <div>
        <h2 className={styles.heading}>No Priority</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.priority === 0 && (
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
      <div>
        <h2 className={styles.heading}>Low</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.priority === 1 && (
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
      <div>
        <h2 className={styles.heading}>Medium</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.priority === 2 && (
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
      <div>
        <h2 className={styles.heading}>High</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.priority === 3 && (
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
      <div>
        <h2 className={styles.heading}>Urgent</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.priority === 4 && (
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
    </div>
  );
};

export default Priority;
