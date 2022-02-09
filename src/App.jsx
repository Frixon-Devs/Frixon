import React from 'react';
import About from './components/About/About.jsx' 
import Navbar from './components/Navbar/Navbar.jsx' 
import Landing from './components/Landing/Landing.jsx' 
import Projects from './components/Projects/Projects.jsx' 
import Developers from './components/Developers/Developers.jsx' 
import { TigerNinja, Antimatter, MustafaXD, Qwel, Lil, Brody, Nikolipo, StaticVoid } from './components/Developers/Devs/Devs.jsx' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/devs" element={<Developers />} />
				<Route exact path="/devs/718712985371148309" element={<TigerNinja />} />
				<Route exact path="/devs/822730830027816960" element={<Antimatter />} />
				<Route exact path="/devs/831585664859373588" element={<MustafaXD />} />
				<Route exact path="/devs/809805000905326603" element={<Qwel />} />
				<Route exact path="/devs/696650928907878440" element={<Lil />} />
				<Route exact path="/devs/774966544664100865" element={<Brody />} />
				<Route exact path="/devs/564452749425639483" element={<Nikolipo />} />
				<Route exact path="/devs/733650965269446666" element={<StaticVoid />} />
			</Routes>
		</Router>
	);
}

export default App;
