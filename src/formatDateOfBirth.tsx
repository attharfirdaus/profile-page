export function formatDateOfBirth(dateString: string) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : 'th';

    return (
        <span>
          {day}
          <sup className="text-[10px] align-super">{suffix}</sup> of {month} {year}
        </span>       
    )
}
