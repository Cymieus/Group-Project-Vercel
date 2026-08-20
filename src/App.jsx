import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import AttendanceChecker from './pages/AttendanceChecker'
import ElectricityBill from './pages/ElectricityBill'
import GradeEvaluation from './pages/GradeEvaluaton'
import Login from './pages/Login'
import PasswordChecker from './pages/PasswordChecker'

const navItems = [
	{ key: 'homepage', label: 'Homepage' },
	{ key: 'login', label: 'Activity 1' },
	{ key: 'attendance', label: 'Activity 2' },
	{ key: 'electricity', label: 'Activity 3' },
	{ key: 'grades', label: 'Activity 4' },
	{ key: 'password', label: 'Activity 5' },
]

function App() {
	const [currentPage, setCurrentPage] = useState('homepage')

	const pages = {
		homepage: <Homepage />,
		login: <Login />,
		attendance: <AttendanceChecker />,
		electricity: <ElectricityBill />,
		grades: <GradeEvaluation />,
		password: <PasswordChecker />,
	}

	return (
		<>
			<nav className="topnav">
				<span className="topnav-brand">Syntax Squad Rookies</span>
				<div className="topnav-links">
					{navItems.map(({ key, label }) => (
						<button
							key={key}
							className={`topnav-link${currentPage === key ? ' is-active' : ''}`}
							onClick={() => setCurrentPage(key)}
						>
							{label}
						</button>
					))}
				</div>
			</nav>

			{pages[currentPage]}
		</>
	)
}

export default App