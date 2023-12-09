import React from "react";
import styles from "./Status.module.css";

const Status = ({ tickets }) => {
  return (
    <div>
      <div>
        <h2 className={styles.heading}>Backlog</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.status === "Backlog" && (
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
        <h2 className={styles.heading}>Todo</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.status === "Todo" && (
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
        <h2 className={styles.heading}>In Progress</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.status === "In progress" && (
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
        <h2 className={styles.heading}>Done</h2>
        {tickets.map((ticket) => (
          <>
            {ticket.status === "Done" && (
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

export default Status;
