export interface Job {
  id: string;
  title: string;
  zip_code: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  counter: Counter;
  is_awarded: boolean;
  categories: Category[];
  state: string;
  description: string;
  end_date: Date;
  created_at: Date;
}

interface Category {
  id: string;
}

interface Counter {
  messages_total: number;
  messages_unread: number;
}
