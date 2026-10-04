const dateFormatter = new Intl.DateTimeFormat("en-CA", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) return null;
  return dateFormatter.format(date);
}

export default function ThoughtsDate({ writtenOn, editedOn }) {
  const writtenDate = formatDate(writtenOn);
  if (!writtenDate) return null;
  const editedDate = formatDate(editedOn);

  return (
    <p data-thoughts-date className="theme-muted text-[11px] leading-relaxed">
      Written <time dateTime={writtenOn}>{writtenDate}</time>
      {editedDate && <>{" · "}Edited <time dateTime={editedOn}>{editedDate}</time></>}
    </p>
  );
}
