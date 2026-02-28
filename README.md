## QuickHire – Job Portal

QuickHire is a job portal built with **Next.js App Router**, **MongoDB/Mongoose**, **Zod**, **React Hook Form**, and **Tailwind CSS**.

It provides:

- A marketing-style homepage with featured and latest jobs
- Public job listing and job detail pages
- A candidate application form per job
- An admin dashboard to create and delete jobs
- Robust validation and consistent API responses

This project was implemented as a technical assessment for an Associate Software Engineer role.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **UI**: React 19, Tailwind CSS v4, custom components
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod (server & client), @hookform/resolvers
- **Forms**: React Hook Form
- **HTTP**: Next.js route handlers, axios (client API helper)

---

## Features

### Public Site

- Responsive marketing homepage with:
  - Hero section with inline job search UI
  - Featured brands and job categories
  - Featured and latest job sections
- Job listing cards with company, location, category, salary, and posted date
- Individual job detail page at `/jobs/[id]` showing:
  - Full job description and metadata
  - Category tags and posted time
  - Candidate application form in a sticky sidebar

### Job Applications

- Apply per job using the application form:
  - Fields: name, email, resume URL, cover note
  - Client-side validation with Zod + React Hook Form
  - Server-side validation before persisting to MongoDB
- Applications are stored in an `Application` collection referencing the `Job` document.

### Admin Dashboard

- Admin page at `/admin` (client-side UI):
  - Create new jobs via a validated form
  - View all existing jobs in a table
  - Delete jobs with a confirmation modal
- Create/delete operations are backed by API routes and MongoDB.

### API & Data Layer

- REST-style JSON APIs under `/api`:
  - `GET /api/jobs` – list all jobs (newest first)
  - `POST /api/jobs` – create a job
  - `GET /api/jobs/:id` – fetch a single job
  - `DELETE /api/jobs/:id` – delete a job and its applications
  - `POST /api/applications` – submit a job application
- `lib/api.server.ts` – server-only helpers used by server components
- `lib/api.ts` – client-safe API helpers (using axios / fetch)
- Common response envelope with `{ success, data?, message?, errors? }`.

### Validation & Error Handling

- Zod schemas for jobs and applications on the server
- Matching Zod schemas on the client for forms
- API routes:
  - Return 400 for validation errors
  - Return 404 for missing jobs
  - Return 500 for unexpected errors
- UI shows form-level error banners and field-level messages.

---

## Project Structure

High-level structure:

- `app/`
  - `layout.tsx` – root layout, fonts, metadata
  - `page.tsx` – public homepage (server component)
  - `jobs/[id]/page.tsx` – job detail page (server component)
  - `admin/page.tsx` – admin dashboard (client component)
  - `api/jobs/` – jobs list/create route handlers
  - `api/jobs/[id]/` – single job get/delete handlers
  - `api/applications/` – application create handler
- `components/`
  - `layout/` – Navbar, Footer, Container
  - `sections/` – Hero, Featured, Latest, Categories, CTA, Brands
  - `jobs/` – JobCard, JobList, JobFilters
  - `forms/` – AdminJobForm, ApplyForm
  - `admin/` – AdminJobTable
  - `ui/` – Button, Input, Select, Textarea primitives
- `lib/`
  - `db.ts` – MongoDB/Mongoose connection helper
  - `models/Job.ts` – Job schema & model
  - `models/Application.ts` – Application schema & model
  - `api.server.ts` – server-side data helpers
  - `api.ts` – client-side API helpers
  - `types.ts` – shared TypeScript interfaces
  - `validators/` – Zod schemas for jobs & applications
  - `utils.ts`, `utils/apiResponse.ts` – misc utilities

---

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- A running MongoDB instance (local or hosted)

### Installation

```bash
git clone <repo-url>
cd quick_hire_qtech

npm install
# or: pnpm install / yarn / bun
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<db-name>?retryWrites=true&w=majority
```

`MONGODB_URI` is required for the app to connect to MongoDB.

### Running in Development

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Building for Production

```bash
npm run build
npm start
```

This will build the production bundle and start the Next.js server.

---

## API Reference (Brief)

All endpoints return JSON with the shape:

```json
{
	"success": boolean,
	"data": any,
	"message"?: string,
	"errors"?: any
}
```

### Jobs

**GET `/api/jobs`**

- Returns a list of all jobs, sorted by `createdAt` (newest first).

**POST `/api/jobs`**

Request body:

```json
{
  "title": "Senior Software Engineer",
  "company": "Acme Inc",
  "location": "Remote",
  "category": "Engineering",
  "salary": "$80k - $100k",
  "description": "Full job description..."
}
```

### Single Job

**GET `/api/jobs/:id`**

- Returns a single job by its ID.

**DELETE `/api/jobs/:id`**

- Deletes the job and any related applications.

### Applications

**POST `/api/applications`**

Request body:

```json
{
  "job_id": "<job-id>",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "resume_link": "https://example.com/resume.pdf",
  "cover_note": "Short cover letter here..."
}
```

---

## Assumptions & Limitations

- Admin dashboard is not authenticated; it is publicly accessible for demo purposes.
- Job search/filter UI is currently presentational only (no backend filtering).
- Job editing (update) is not implemented; only create and delete.
- Newsletter subscribe and social share buttons are non-functional placeholders.

These can be extended as future improvements if required.

---

## Running Tests

No automated tests were added for this assessment. Manual testing was performed for:

- Creating and deleting jobs via the admin dashboard
- Submitting applications from the job detail page
- Handling validation errors and missing/invalid data

Additional unit and integration tests can be added using Jest/Testing Library or Playwright.
