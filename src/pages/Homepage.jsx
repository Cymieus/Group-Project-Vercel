function Homepage({ onNavigate }) {
	return (
		<div className="homepage">
			<style>{`
				.homepage {
					background-color: #eaf6e8;
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
					background-color: #ccff00;
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
					background-color: #b8e600;
				}
			`}</style>

			<h1>Student Toolkit</h1>
			<p>Pick a tool below to get started.</p>

			<div className="card-list">
				<button className="card" onClick={() => onNavigate('attendance')}>
					<h2>Attendance Checker</h2>
					<p>Check your attendance record.</p>
				</button>

				<button className="card" onClick={() => onNavigate('electricity')}>
					<h2>Electricity Bill</h2>
					<p>Calculate your electricity bill.</p>
				</button>

				<button className="card" onClick={() => onNavigate('grades')}>
					<h2>Grade Evaluation</h2>
					<p>Check your grades and average.</p>
				</button>

				<button className="card" onClick={() => onNavigate('password')}>
					<h2>Password Checker</h2>
					<p>Check if your password is strong.</p>
				</button>
			</div>
		</div>
	)
}

export default Homepage
