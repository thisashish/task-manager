import { useState } from "react";

export default function App()
{
  const [date,setDate] = useState(new Date())

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  var firstDayOfMonth = new Date(date.getFullYear(),date.getMonth(),1)
  var lastDayOfMonth = new Date(date.getFullYear(),date.getMonth()+1,0)
  var daysInMonth = lastDayOfMonth.getDate();
  var startingDay = firstDayOfMonth.getDay()

  var renderDays=()=>{
    var arr = [];

    for(let i=0;i<startingDay;i++){
      arr.push(<div className="celender-days-empty"></div>);
    }
    for(let i=1;i<=daysInMonth;i++){
      arr.push(<div className="celender-days">{i}</div>);
    }

    return arr;
  }

   return <div>
    <div className="cal_body">

    <div className="row mb-4">
        <div className="col-1">
          <div className="cal-btn">
            <button onClick={()=>setDate(new Date(date.getFullYear()-1,date.getMonth()))}>&lt;</button>
          </div>
        </div>
        <div className="col-10">
          <div className="month-body">
              {date.getFullYear()}
          </div>
        </div>
        <div className="col-1">
          <div className="cal-btn">
            <button onClick={()=>setDate(new Date(date.getFullYear()+1,date.getMonth()))}>&gt;</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-1">
          <div className="cal-btn">
            <button onClick={()=>setDate(new Date(date.getFullYear(),date.getMonth()-1))}>&lt;</button>
          </div>
        </div>
        <div className="col-10">
          <div className="month-body">
              {months[date.getMonth()]}
          </div>
        </div>
        <div className="col-1">
          <div className="cal-btn">
            <button onClick={()=>setDate(new Date(date.getFullYear(),date.getMonth()+1))}>&gt;</button>
          </div>
        </div>
      </div>
    </div>

    <div className="main-body">
        {days.map(dy=>(
          dy=='Sunday'?
          <div key={dy} className="days-of-week text-danger">{dy}</div>
          :
          <div key={dy} className="days-of-week">{dy}</div>
        ))}
      {renderDays()}
    </div>
  </div>
}

/*const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December',
  ];

  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDay = firstDayOfMonth.getDay();

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(<div key={`day-${day}`} className="calendar-day">{day}</div>);
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>
          &lt;
        </button>
        <h2>{`${monthNames[date.getMonth()]} ${date.getFullYear()}`}</h2>
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>
          &gt;
        </button>
      </div>
      <div className="calendar-body">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-of-week">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;*/