// code your solution here
function superbowlWin(record) {
    const winYears = record.filter(year => year.result === "W");
    return winYears.length > 0 ? winYears[0].year : undefined;
  }
