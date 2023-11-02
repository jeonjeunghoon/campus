export const parseCreatedAt = (createdAt: string) => {
  const [date, timeWithMilliseconds] = createdAt.split('T');
  const time = timeWithMilliseconds.split('.').toString().slice(0, 5);

  return { date, time };
};
