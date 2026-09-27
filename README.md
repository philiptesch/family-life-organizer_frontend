👨‍👩‍👧‍👦 Family Organizer

A modern Family Organizer built with Angular.

The application helps families organize their everyday life in one place. Adults and children have separate accounts and different areas of the application.

---

✨ Features

🔐 Authentication

The application provides registration and login for:

- 👨 Adults
- 🧒 Children

Users can create their own account and log in securely.

🧒 Children & Avatars

Children have their own user area.

During registration, children can:

- Choose an avatar
- Enter their name
- Create their own account
- Log in with their account

The selected avatar is displayed throughout the application.

👨 Adults

Adults can manage the family organization.

They can:

- Manage family members
- Create appointments
- Create and assign tasks
- Manage the shopping list
- Create notes

👨‍👩‍👧‍👦 Family

The Family Organizer is designed so that adults and children can use the same family account environment while having different permissions and functionality.

📊 Dashboard

The dashboard provides an overview of important family information:

- 📅 Upcoming appointments
- ✅ Open tasks
- 🛒 Shopping list
- 🎂 Birthdays
- 👨‍👩‍👧‍👦 Family members

📅 Calendar

Family members can create and manage:

- Appointments
- Events
- Birthdays
- Family activities

✅ Tasks

Tasks can be created and assigned to family members.

Users can:

- Create tasks
- Assign tasks
- Complete tasks
- Delete tasks

Children can see their assigned tasks and mark them as completed.

🛒 Shopping List

The shared shopping list allows family members to:

- Add items
- Remove items
- Mark items as completed
- Share the list with the family

📝 Notes

Family members can create and manage shared notes.

---

🛠️ Technologies

The project is built with:

- Angular
- TypeScript
- HTML
- SCSS / CSS
- Angular Router
- Angular Forms
- Angular Services
- RxJS

---

📦 Installation

Clone the repository:

git clone <repository-url>

Navigate into the project:

cd family-organizer

Install the dependencies:

npm install

Start the Angular development server:

ng serve

The application will be available at:

http://localhost:4200

---

🚀 Angular CLI Commands

Create a new Angular project

ng new family-organizer

Navigate into the project:

cd family-organizer

Start the development server:

ng serve

Build the project:

ng build

Run the tests:

ng test

---

📄 Generate Components

Login

ng g c pages/login

Register

ng g c pages/register

Dashboard

ng g c pages/dashboard

Calendar

ng g c pages/calendar

Tasks

ng g c pages/tasks

Shopping List

ng g c pages/shopping-list

Notes

ng g c pages/notes

Children

ng g c pages/children

Avatar Selection

ng g c components/avatar-selection

---

🔐 Authentication

Generate the authentication service:

ng g s services/auth

The authentication service handles:

- Login
- Registration
- Logout
- Current user
- User roles

Possible user roles:

adult
child

---

🛡️ Route Guards

Generate an authentication guard:

ng g guard guards/auth

The guard protects pages that require authentication.

Public routes:

/login
/register

Protected routes:

/dashboard
/calendar
/tasks
/shopping-list
/notes

---

🧒 Avatar Selection

Generate the avatar component:

ng g c components/avatar-selection

Possible avatars:

assets/avatars/avatar-01.png
assets/avatars/avatar-02.png
assets/avatars/avatar-03.png
assets/avatars/avatar-04.png
assets/avatars/avatar-05.png
assets/avatars/avatar-06.png

Example user object:

user = {
  name: 'Tom',
  role: 'child',
  avatar: 'avatar-03.png'
};

---

🧩 Services

Generate the application services:

ng g s services/auth
ng g s services/user
ng g s services/family
ng g s services/calendar
ng g s services/tasks
ng g s services/shopping-list
ng g s services/notes

Services are responsible for application logic and communication with the backend.

---

📂 Project Structure

family-organizer/
│
├── src/
│   ├── app/
│   │
│   ├── components/
│   │   ├── avatar-selection/
│   │   ├── header/
│   │   ├── sidebar/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── dashboard/
│   │   ├── calendar/
│   │   ├── tasks/
│   │   ├── shopping-list/
│   │   ├── notes/
│   │   └── children/
│   │
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── user.service.ts
│   │   ├── family.service.ts
│   │   ├── calendar.service.ts
│   │   ├── tasks.service.ts
│   │   ├── shopping-list.service.ts
│   │   └── notes.service.ts
│   │
│   ├── guards/
│   │   └── auth.guard.ts
│   │
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── task.model.ts
│   │   ├── event.model.ts
│   │   └── note.model.ts
│   │
│   └── app.routes.ts
│
├── assets/
│   ├── avatars/
│   ├── icons/
│   └── images/
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md

---

🧱 Generate Interfaces

User:

ng g interface models/user

Task:

ng g interface models/task

Event:

ng g interface models/event

Note:

ng g interface models/note

---

🧭 Routing

The application uses Angular Router.

Example routes:

/login
/register
/dashboard
/calendar
/tasks
/shopping-list
/notes

Login and registration are publicly accessible.

The remaining pages require authentication.

---

📱 Responsive Design

The Family Organizer is designed for:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

The interface adapts to different screen sizes.

---

🔮 Future Features

Planned features may include:

- 🔔 Notifications
- 💬 Family chat
- 💰 Family budget
- 🍕 Meal planner
- 🧹 Household cleaning plan
- 🎂 Birthday reminders
- 📸 Family photo gallery
- 🌤️ Weather widget
- 🏆 Children's reward system
- ⭐ Points for completed tasks
- 🎮 Gamification

---

👨‍💻 Author

PhilipTesch

---

📜 License

Copyright © 2026 PhilipTesch

All rights reserved.

This project is owned by PhilipTesch.

The source code, design, images, and other project assets may not be copied, modified, distributed, or used commercially without prior permission from the copyright holder.