export interface RecordedClass {
  id: string;
  date: string;
  subject: string;
  title: string;
  videoLink: string;
}

export const mockClasses: RecordedClass[] = [
  {
    id: '1',
    date: '2024-03-01',
    subject: 'Abacus',
    title: 'Introduction to Level 1',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '2',
    date: '2024-03-02',
    subject: 'Handwriting',
    title: 'Cursive Writing Basics',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '3',
    date: '2024-03-03',
    subject: 'Telugu',
    title: 'Varnamala - Part 1',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: '4',
    date: '2024-03-04',
    subject: 'Abacus',
    title: 'Addition using Small Friends',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];
