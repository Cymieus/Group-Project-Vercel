function Homepage({ onNavigate }) {
	return (
		<div className="homepage">
			<style>{`
				.homepage {
					background-color: #ffffff;
					min-height: 100vh;
					padding: 40px;
					text-align: center;
					font-family: Arial, sans-serif;
				}

				.homepage h1 {
					color: #16241a;
					margin-bottom: 8px;
				}

				.homepage p {
					color: #333333;
					margin-bottom: 32px;
				}

				.card-list {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 16px;
				}

				.card {
					background-color: #e6f0c2;
					border: none;
					border-radius: 8px;
					padding: 20px;
					width: 200px;
					cursor: pointer;
					text-align: left;
				}

				.card h2 {
					font-size: 18px;
					margin: 0 0 8px 0;
					color: #16241a;
				}

				.card p {
					font-size: 14px;
					margin: 0;
					color: #16241a;
				}

				.card:hover {
					background-color: #c8ceb1;
				}
			`}</style>

			<h1>Student Toolkit</h1>
			<p>A single React application, five activities, one Shared Navbar.</p>

			<div className="card-list">
				<button className="card" onClick={() => onNavigate('login')}>
					<h2>Login</h2>
				</button>

				<button className="card" onClick={() => onNavigate('grades')}>
					<h2>Grade Evaluation</h2>
				</button>

				<button className="card" onClick={() => onNavigate('password')}>
					<h2>Password Checker</h2>
				</button>

				<button className="card" onClick={() => onNavigate('electricity')}>
					<h2>Electricity Bill</h2>
				</button>
				
				<button className="card" onClick={() => onNavigate('attendance')}>
					<h2>Attendance Checker</h2>
				</button>
			</div>
		</div>
	)
}

export default Homepage
