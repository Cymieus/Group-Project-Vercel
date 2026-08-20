const tools = [
	{
		key: 'attendance',
		name: 'Attendance Checker',
		desc: 'See where you stand before it costs you a slot in the exam.',
	},
	{
		key: 'electricity',
		name: 'Electricity Bill',
		desc: 'Feed in your reading, get the peso amount before the bill does.',
	},
	{
		key: 'grades',
		name: 'Grade Evaluation',
		desc: 'Enter your units and grades, know your standing at a glance.',
	},
	{
		key: 'password',
		name: 'Password Checker',
		desc: 'Run a password against the basics before you trust it with anything.',
	},
]

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&display=swap');

.homepage {
	background: #eaf6e8;
	color: #16241a;
	min-height: 100vh;
	padding: 64px 24px 96px;
	font-family: 'Inter', sans-serif;
}

.hero {
	max-width: 640px;
	margin: 0 auto 56px;
	text-align: center;
}

.eyebrow {
	font-family: 'Inter', sans-serif;
	font-weight: 500;
	font-size: 12px;
	letter-spacing: 0.18em;
	color: #4b7a4a;
}

.hero h1 {
	font-family: 'Space Grotesk', sans-serif;
	font-weight: 700;
	font-size: clamp(32px, 5vw, 48px);
	line-height: 1.1;
	margin: 16px 0 20px;
}

.hero-sub {
	color: #4c5f4a;
	font-size: 16px;
	line-height: 1.5;
	max-width: 460px;
	margin: 0 auto;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 16px;
	max-width: 900px;
	margin: 0 auto;
}

.card {
	background: #99ebb4;
	border: none;
	border-radius: 10px;
	padding: 22px;
	text-align: left;
	cursor: pointer;
	color: #16241a;
	font-family: inherit;
	transition: transform 0.15s ease, box-shadow 0.15s ease;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.card:hover,
.card:focus-visible {
	transform: translateY(-2px);
	box-shadow: 0 0 0 3px #16241a;
	outline: none;
}

.card h2 {
	font-family: 'Space Grotesk', sans-serif;
	font-size: 18px;
	font-weight: 700;
	margin: 0;
}

.card p {
	font-size: 13.5px;
	color: #2c3a29;
	line-height: 1.45;
	margin: 0;
	flex-grow: 1;
}

.enter {
	font-family: 'Inter', sans-serif;
	font-weight: 500;
	font-size: 12px;
	color: #16241a;
}

@media (prefers-reduced-motion: reduce) {
	.card {
		transition: none;
	}
}
`

function Homepage({ onNavigate }) {
	return (
		<div className="homepage">
			<style>{styles}</style>

			<section className="hero">
				<h1>
					Vercel Group Activity
					<br />
					Homepage Portal
				</h1>
				<p className="hero-sub">
					
				</p>
			</section>

			<section className="grid">
				{tools.map(({ key, name, desc }) => (
					<button key={key} className="card" onClick={() => onNavigate(key)}>
						<h2>{name}</h2>
						<p>{desc}</p>
						<span className="enter">Open →</span>
					</button>
				))}
			</section>
		</div>
	)
}

export default Homepage