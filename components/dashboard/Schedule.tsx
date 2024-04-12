type ScheduleProps = {
  date: Date | undefined;
};

export const Schedule = ({ date }: ScheduleProps) => {
  return (
    <div>
      <h2>Schedule</h2>
      <div>Date: {JSON.stringify(date)}</div>
    </div>
  );
};
