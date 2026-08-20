import { useState } from 'react'
import './App.css'
import AttendanceChecker from './pages/AttendanceChecker'
import ElectricityBill from './pages/ElectricityBill'
import GradeEvaluation from './pages/GradeEvaluaton'
import Login from './pages/Login'
import PasswordChecker from './pages/PasswordChecker'

function App() {
	const [currentPage, setCurrentPage] = useState('login')

	const pages = {
		login: <Login />,
		attendance: <AttendanceChecker />,
		electricity: <ElectricityBill />,
		grades: <GradeEvaluation />,
		password: <PasswordChecker />,
	}

	return (
		<>
			<nav>
				<button onClick={() => setCurrentPage('login')}>Login</button>
				<button onClick={() => setCurrentPage('attendance')}>Attendance</button>
				<button onClick={() => setCurrentPage('electricity')}>Electricity</button>
				<button onClick={() => setCurrentPage('grades')}>Grades</button>
				<button onClick={() => setCurrentPage('password')}>Password</button>
			</nav>

			{pages[currentPage]}
		</>
	)
}

export default App

