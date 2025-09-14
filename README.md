# Todo App 📝

A clean, modern todo application built with React and Vite. Manage your daily tasks with an intuitive interface and real-time statistics.

## ✨ Features

- ✅ **Add new todos** - Quickly add tasks with a simple input form
- ✅ **Mark as complete** - Toggle completion status with checkboxes
- ✅ **Delete todos** - Remove tasks you no longer need
- ✅ **Data persistence** - Todos automatically saved to browser storage
- ✅ **Real-time statistics** - Track total, active, and completed todos
- ✅ **Responsive design** - Works seamlessly on desktop and mobile
- ✅ **Modern UI** - Clean interface with smooth transitions
- ✅ **Accessible** - Built with accessibility best practices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aashishvibhu/to-do.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the app

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Global styles and component styling
├── main.jsx            # React app entry point
└── components/
    ├── AddTodo.jsx     # Form component for adding new todos
    ├── TodoList.jsx    # Container component for displaying todos
    └── TodoItem.jsx    # Individual todo item component
```

## 🏗️ Architecture

The app follows a **modular component architecture**:

- **App.jsx** - Main container managing state and business logic
- **AddTodo** - Handles new todo creation with form validation
- **TodoList** - Renders the list of todos and empty states
- **TodoItem** - Individual todo with toggle and delete functionality

### State Management

- **React Hooks** - Uses `useState` for component state and `useEffect` for side effects
- **Centralized State** - All todo data managed at the App component level
- **Props Down Pattern** - State passed down to child components via props
- **Immutable Updates** - State updates use spread syntax for React optimization
- **Unidirectional Data Flow** - Follows React's principle of lifting state up

### Data Persistence

- **localStorage Integration** - Todos automatically saved to browser's local storage
- **Auto-save Functionality** - Every add, toggle, or delete operation is instantly persisted
- **Page Refresh Survival** - Your todos remain intact after browser refresh or restart
- **Lazy Initial State** - Efficiently loads saved data only on app initialization
- **Browser-specific Storage** - Data is isolated per browser (Chrome ≠ Firefox ≠ Safari)
- **Device-specific Data** - Todos don't sync between different devices

## 🎨 Styling

- **CSS3** with modern features (Flexbox, CSS Grid, CSS Variables)
- **Responsive design** with mobile-first approach
- **Smooth animations** and hover effects for better UX
- **Accessible color contrast** and focus indicators

## 🧪 Technology Stack

- **React 19.1.1** - UI library for building user interfaces
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint** - Code linting and quality checks
- **CSS3** - Styling and responsive design

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aashish Vibhu**
- GitHub: [@aashishvibhu](https://github.com/aashishvibhu)

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Bundled with [Vite](https://vitejs.dev/)
- Styled with modern CSS

---

**Happy task managing! 🎉**
