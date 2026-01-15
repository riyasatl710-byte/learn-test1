
import React from 'react';
import { GovernmentOrder, Report, EventPhoto, Stat } from './types';

export const GOVERNMENT_ORDERS: GovernmentOrder[] = [
  { id: '1', orderNumber: 'GO-2024-001', title: 'Healthcare Initiative for Rural Development', date: '2024-03-15', department: 'Health & Wellness', size: '2.4 MB' },
  { id: '2', orderNumber: 'GO-2024-042', title: 'Urban Sanitation & Green Cover Expansion', date: '2024-02-28', department: 'Environment', size: '1.8 MB' },
  { id: '3', orderNumber: 'GO-2023-112', title: 'Youth Skill Development Program Phase II', date: '2023-12-10', department: 'Education', size: '3.1 MB' },
  { id: '4', orderNumber: 'GO-2023-089', title: 'Clean Water Accessibility Protocol', date: '2023-11-05', department: 'Utilities', size: '1.2 MB' },
  { id: '5', orderNumber: 'GO-2023-055', title: 'Digital Literacy for Senior Citizens', date: '2023-10-20', department: 'Social Welfare', size: '2.7 MB' },
];

export const REPORTS: Report[] = [
  { id: 'r1', title: 'Annual Impact Assessment 2023', year: '2023', type: 'Annual', size: '5.2 MB' },
  { id: 'r2', title: 'Monthly Progress Report - March', year: '2024', type: 'Monthly', size: '1.1 MB' },
  { id: 'r3', title: 'Sustainability Special Report', year: '2023', type: 'Special', size: '4.5 MB' },
  { id: 'r4', title: 'Quarterly Financial Statement Q4', year: '2023', type: 'Annual', size: '2.3 MB' },
];

export const EVENTS: EventPhoto[] = [
  { id: 'e1', url: 'https://picsum.photos/id/101/800/600', title: 'Community Health Drive', date: 'Jan 15, 2024', description: 'Over 200 residents received free primary care checkups and vital medicines.' },
  { id: 'e2', url: 'https://picsum.photos/id/102/800/600', title: 'Youth Skill Workshop', date: 'Feb 10, 2024', description: 'Empowering local youth with digital literacy and vocational training skills.' },
  { id: 'e3', url: 'https://picsum.photos/id/103/800/600', title: 'Green City Plantation', date: 'Mar 05, 2024', description: 'Planted 5,000 native saplings across the metropolitan bypass area.' },
  { id: 'e4', url: 'https://picsum.photos/id/104/800/600', title: 'Elderly Support Meet', date: 'Mar 22, 2024', description: 'A day of social interaction and wellness counseling for senior citizens.' },
];

export const STATS: Stat[] = [
  { label: 'Lives Impacted', value: 500000, suffix: '+', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
  { label: 'Active Projects', value: 24, suffix: '', icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' },
  { label: 'Volunteers', value: 1200, suffix: '+', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
  { label: 'Districts Reached', value: 15, suffix: '', icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' },
];

export const NEWS_ALERTS = [
  "New health clinic opening in Sector 12 on April 5th!",
  "Applications now open for the 2024 Scholarship Program.",
  "CivicServe awarded the 'Community Excellence' trophy for 2023.",
  "Join our upcoming 'Clean the Beach' initiative this Sunday at 7 AM.",
  "Q1 Progress Reports are now available in the Download Center."
];
