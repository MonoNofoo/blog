/**
 * 年月日
 */
import { format } from 'date-fns';

export type LocalDate = string;

/**
 * 渡された年月日を yyyy年mm月dd日 という文字列に変換する
 * @param date
 */
export const formatLocalDateToJapanese = (date: Date | LocalDate) => {
  const dateObject = typeof date === 'string' ? new Date(date) : date;

  return format(dateObject, `yyyy年MM月dd日`);
};
