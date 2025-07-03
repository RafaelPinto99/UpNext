## User Stories for UpNext

| # | User Story | So That | Base URL | Path |
|---|------------|---------|----------|------|
| 1 | As a visitor, I can visit the home page | I can discover the proposition value | `/` | `/` |
| 2 | As a visitor, I can create an account | I can keep track of the companies I've sent my resume | `/auth` | `/auth/signup` |
| 3 | As a user, I can add a job application | I can keep track of where I applied | `/` | `/add` |
| 4 | As a user, I can view a list of all my job applications | I can see their status at a glance | `/` | `/` |
| 5 | As a user, I can search for an application by company or role | I can quickly find what I’m looking for | `/` | `/search?q=company-name` |
| 6 | As a user, I can update the status of an application | I can reflect its current progress | `/application/[id]` | `/application/123/edit` |
| 7 | As a user, I can sort and search/filter through applications | I can manage and navigate my data easily | `/` | `/` (with sort/filter functionality) |
| 8 | As a user, I can view additional fields like salary, location, interview date and level of priority | I can better plan and prioritize my job search | `/` | `/` (with extended table columns) |

### Table Columns for Application List
- **Date Added**
- **Job Title**
- **Company**
- **Location**
- **Status** (e.g., Applied, Interviewing, Rejected)
- **Min Salary**
- **Max Salary**
- **Upcoming** (e.g., Interview Date, Contract Signing)
- **Rating** (e.g., 1–5 stars or priority level)
