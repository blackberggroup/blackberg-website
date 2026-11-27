// Careers configuration shared by the careers page, sitemap, and resume API.

// Individual job listings are switched off. To bring them back, see
// src/app/archive/careers/README.md.
export const CAREER_LISTINGS_ENABLED = process.env.NEXT_PUBLIC_CAREER_LISTINGS_ENABLED === 'true';

export const FIELDS_OF_INTEREST = [
    'Communications & Marketing',
    'Business Development',
    'General Management Consulting',
    'Data Scientist',
    'Project Management',
    'Data and AI',
    'Web Design and Development',
    'Graphic Design and Video',
    'Other',
];

export const MAX_FIELDS_OF_INTEREST = 2;

// Vercel rejects request bodies over 4.5 MB, so resumes are capped at 4 MB.
export const MAX_RESUME_SIZE_MB = 4;
export const MAX_RESUME_SIZE_BYTES = MAX_RESUME_SIZE_MB * 1024 * 1024;

export const RESUME_EXTENSIONS = ['.pdf', '.doc', '.docx'];
