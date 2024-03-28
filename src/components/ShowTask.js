export const ShowTask = () => {
  const tasks = [
    { id: 10001, name: "Task A", Time: "2:09:01 am 09/14/2023" },
    { id: 10002, name: "Task B", Time: "2:09:01 am 09/14/2023" },
    { id: 10003, name: "Task C", Time: "2:09:01 am 09/14/2023" },
  ];

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>

      <ul>
        {tasks.map((task) =>(
        <li>
        <p>
          <span className="name">{task.name}</span>
          <span className="time">{task.Time}</span>
        </p>

        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </li>
        ))}

      </ul>
    </section>
  );
};
