
export interface GovernmentOrder {
  id: string;
  orderNumber: string;
  title: string;
  date: string;
  department: string;
  size: string;
}

export interface Report {
  id: string;
  title: string;
  year: string;
  type: 'Annual' | 'Monthly' | 'Special';
  size: string;
}

export interface EventPhoto {
  id: string;
  url: string;
  title: string;
  date: string;
  description: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}
