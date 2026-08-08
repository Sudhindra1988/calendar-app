const monthYear = document.getElementById("month-year");

const calendarDays = document.getElementById("calendar-days");

const previousMonthButton = document.getElementById("previous-month");

const nextMonthButton = document.getElementById("next-month");

const todayButton = document.getElementById("today-button");

const today = new Date();

let currentMonth = today.getMonth();

let currentYear = today.getFullYear();

function renderCalendar() {
  calendarDays.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1);

  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  const firstDayIndex = firstDay.getDay();

  const numberOfDays = lastDay.getDate();

  const monthName = firstDay.toLocaleString("default", {
    month: "long",
  });

  monthYear.textContent = `${monthName} ${currentYear}`;

  // Empty cells before the first day

  for (let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement("div");

    calendarDays.appendChild(emptyCell);
  }

  // Calendar dates

  for (let day = 1; day <= numberOfDays; day++) {
    const dayElement = document.createElement("div");

    dayElement.textContent = day;

    // Highlight today's date

    if (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    calendarDays.appendChild(dayElement);
  }
}

// Previous month

previousMonthButton.addEventListener("click", () => {
  currentMonth--;

  if (currentMonth < 0) {
    currentMonth = 11;

    currentYear--;
  }

  renderCalendar();
});

// Next month

nextMonthButton.addEventListener("click", () => {
  currentMonth++;

  if (currentMonth > 11) {
    currentMonth = 0;

    currentYear++;
  }

  renderCalendar();
});

// Today button

todayButton.addEventListener("click", () => {
  currentMonth = today.getMonth();

  currentYear = today.getFullYear();

  renderCalendar();
});

// Initial calendar

renderCalendar();
