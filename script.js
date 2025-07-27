body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #121212;
  color: #f1f1f1;
}

header {
  background-color: #1c1c1c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

header h1 {
  color: #ff4d00;
  font-size: 1.8rem;
  margin: 0;
}

nav a {
  color: #f1f1f1;
  margin-left: 1.2rem;
  text-decoration: none;
  font-weight: 500;
}

nav a:hover,
nav a.active {
  color: #ff4d00;
  border-bottom: 2px solid #ff4d00;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  background-color: #ff4d00;
  color: white;
  padding: 0.8rem 1.6rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
}

section {
  padding: 2.5rem 1rem;
  max-width: 960px;
  margin: auto;
}

section h2 {
  font-size: 1.6rem;
  color: #ff4d00;
  margin-bottom: 1.5rem;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.card {
  background-color: #1c1c1c;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #00000055;
}

.card h3 {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.card ul {
  list-style-type: disc;
  padding-left: 1.2rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #1c1c1c;
  color: #aaa;
  font-size: 0.9rem;
}

a {
  color: #61dafb;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (min-width: 700px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}