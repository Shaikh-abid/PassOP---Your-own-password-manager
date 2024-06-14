# PassOP - Your Own Password Manager

PassOP is a responsive password manager application built with React.js, JavaScript, Tailwind CSS, react-toastify, and Lord Icons. This project allows users to securely store and manage their website URLs, usernames, and passwords. The user can perform various operations such as copying, editing, and deleting entries. The data is persisted using localStorage, ensuring that information remains intact even after a page refresh. The user interface is designed to be visually appealing and user-friendly.

## Features

- **Add Entries**: Users can enter a website URL, username, and password, and save them.
- **Display Entries**: All saved entries are displayed in a table format.
- **Copy to Clipboard**: Each entry has a copy icon for quick copying of the URL, username, or password.
- **Edit and Delete**: Users can edit or delete any entry.
- **Persistent Storage**: Data is stored in localStorage to ensure it remains after page refresh.
- **Responsive Design**: The application is fully responsive and works on all devices.
- **Animated Icons**: Uses Lord Icons for animated icons on hover.
- **Notifications**: Uses react-toastify for notifications and alerts.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used for application logic.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **react-toastify**: A library for notifications.
- **Lord Icons**: Animated icons for interactive UI elements.
- **localStorage**: Web storage for persisting user data.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/passop-password-manager.git
   cd passop-password-manager
2. Install dependencies:
   ```bash
     npm install

3. Start the development server:
   ```bash
     npm start

4. Open your browser and navigate to http://localhost:3000.

## Usage

1. **Add Entry**: Enter the website URL, username, and password in the input fields and click the "Save" button.
2. **View Entries**: All saved entries will be displayed in a table below the input fields.
3. **Copy Entry**: Click the copy icon next to any entry to copy its URL, username, or password to the clipboard.
4. **Edit Entry**: Click the edit icon to modify an existing entry.
5. **Delete Entry**: Click the delete icon to remove an entry.
6. **Persistent Storage**: Refresh the page to see that your entries are still there, thanks to localStorage.
