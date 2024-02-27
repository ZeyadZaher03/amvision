import React from "react";

import styles from "./schedule-an-appointment.module.scss";
import { InlineWidget } from "react-calendly";

export const ScheduleAnAppointment = () => {
  return (
    <section className={styles.schedule_an_appointment}>
      <h2 className={styles.schedule_an_appointment_header}>Schedule a call</h2>
      <div className={styles.schedule_an_appointment_calendar_wrapper}>
        <InlineWidget
          pageSettings={{
            hideGdprBanner: true,
          }}
          url="https://calendly.com/zeyadzaher02/one-on-one-with-me"
        />
      </div>
    </section>
  );
};
