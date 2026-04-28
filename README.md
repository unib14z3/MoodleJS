# MoodleJS 📚⚙️

A modular JavaScript wrapper for Moodle Web Service APIs.
Built for dashboards, assignment tracking, course resource access, and academic automation.

---

## Features

### Core:

* User / login info
* Assignments
* Submission status
* Course contents
* Calendar events
* Raw request access
* Modular domain architecture

---

## Installation

### Local:

```bash
npm install ../moodleJS
```

### GitHub:

```bash
npm install git+https://github.com/yourusername/moodlejs.git
```

---

## Project Structure

```txt
moodleJS/
 ┣ client.js
 ┣ wrapper.js
 ┣ package.json
 ┗ domains/
    ┣ user.js
    ┣ assignments.js
    ┣ courses.js
    ┗ calendar.js
```

---

## Quick Start

```javascript
const MoodleJS = require("moodlejs");

const moodle = new MoodleJS(
    "https://yourmoodle.com",
    "YOUR_TOKEN"
);

(async () => {
    const user = await moodle.user.getUserInfo();
    console.log(user);
})();
```

---

## Authentication

MoodleJS requires:

* Moodle base URL
* Web Service token

```javascript
const moodle = new MoodleJS(
    "https://yourmoodle.com",
    "YOUR_TOKEN"
);
```

---

# Domains

---

## User Domain

### Get logged-in user info:

```javascript
const user = await moodle.user.getUserInfo();
console.log(user);
```

### Get raw site info:

```javascript
const siteInfo = await moodle.user.getSiteInfo();
```

---

## Assignments Domain

### Get all assignments:

```javascript
const assignments = await moodle.assignments.getAssignments();
```

### Get submission status:

```javascript
const status = await moodle.assignments.getSubmissionStatus(assignId);
```

---

## Courses Domain

### Get course contents:

```javascript
const contents = await moodle.courses.getContents(courseId);
```

---

## Calendar Domain

### Get upcoming events:

```javascript
const events = await moodle.calendar.getUpcoming();
```

---

## Raw Request Access

For unsupported functions:

```javascript
const data = await moodle.request(
    "core_webservice_get_site_info"
);
```

---

# Example: Assignment Tracker

```javascript
const assignments = await moodle.assignments.getAssignments();

for (const course of assignments.courses) {
    for (const assignment of course.assignments) {
        console.log(
            assignment.name,
            assignment.duedate
        );
    }
}
```

---

## Environment Variables (Recommended)

### Install:

```bash
npm install dotenv
```

### `.env`

```env
MOODLE_URL=https://yourmoodle.com
MOODLE_TOKEN=your_token
```

### Usage:

```javascript
require("dotenv").config();

const MoodleJS = require("moodlejs");

const moodle = new MoodleJS(
    process.env.MOODLE_URL,
    process.env.MOODLE_TOKEN
);
```

---

## Confirmed Useful Moodle Functions

* `core_webservice_get_site_info`
* `mod_assign_get_assignments`
* `mod_assign_get_submission_status`
* `core_course_get_contents`
* `core_calendar_get_calendar_upcoming_view`

---

## Architecture

### `wrapper.js`

Base request engine

### `domains/`

Feature-specific modules

### `client.js`

Unified Moodle client

---

## Security Notes

**Never expose your token publicly.**

Recommended:

* `.env`
* Private config files
* Server-side storage

---

## Roadmap

* Grades domain
* Files domain
* Forums
* Notifications
* Overdue assignment tracker
* Dashboard integrations

---

## License

MIT

---

## Author

Built by Kray ⚡

---

# Philosophy

MoodleJS transforms Moodle’s raw WS functions:

```txt
mod_assign_get_submission_status
```

Into:

```javascript
moodle.assignments.getSubmissionStatus()
```

Less boilerplate. More command center.
