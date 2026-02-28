export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  salary: string;
  description: string;
  created_at: string;
}

export interface Application {
  id?: string;
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  cover_note: string;
  created_at?: string;
}
