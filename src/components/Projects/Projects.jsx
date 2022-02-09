import React from 'react';
import './Projects.css';

export default function Projects() {
	return (
		<div className="projects-container">
			<div className="content">
				<h1 className="title">Projects <span>Team Frixion™</span> has worked on so far</h1>
				<div className="projects">

					<div className="project">
						<div className="profile">
							<img src="https://cdn.discordapp.com/avatars/881081254555029515/671517d18dc534fabb8bb5479e2dda29.webp?size=1024" alt="" />
							<h1>Bolt</h1>
						</div>
						<div className="info">
							<p>Bolt is a very powerfull moderation bot for your discord server.</p>
							<div className="buttons">
								<a href="https://bolt-discord.netlify.app">Website</a>
								<a href="https://discord.com/oauth2/authorize?client_id=881081254555029515&permissions=536870911991&scope=bot">Invite</a>
							</div>
						</div>
					</div>

					<div className="project">
						<div className="profile">
							<img src="https://cdn.discordapp.com/avatars/847719886159216670/bf190d03553946e7433db14a38cde115.webp?size=1024" alt="" />
							<h1>CogBot</h1>
						</div>
						<div className="info">
							<p>CogBot is the all in one discord bot to help your server.</p>
							<div className="buttons">
								<a href="https://flake.netlify.app">Website</a>
								<a href="https://discord.com/oauth2/authorize?client_id=847719886159216670&permissions=536870911991&scope=bot">Invite</a>
							</div>
						</div>
					</div>

					<div className="project">
						<div className="profile">
							<img src="https://cdn.discordapp.com/avatars/886153777449693184/45172692f9f2a0030a07addaf4c034c8.webp?size=1024" alt="" />
							<h1>Flake</h1>
						</div>
						<div className="info">
							<p>Flake is the best economy discord bot to keep your chat alive!</p>
							<div className="buttons">
								<a href="https://flake.netlify.app">Website</a>
								<a href="https://discord.com/oauth2/authorize?client_id=886153777449693184&permissions=536870911991&scope=bot">Invite</a>
							</div>
						</div>
					</div>

					<div className="project">
						<div className="profile">
							<img src="https://cdn.discordapp.com/avatars/896973500756148234/6fc0f847ad9613e25ffe0ea52269be6c.webp?size=1024" alt="" />
							<h1>JellyBot</h1>
						</div>
						<div className="info">
							<p>Flake is the best economy discord bot to keep your chat alive!</p>
							<div className="buttons">
								<a href="https://jellybot-discord.netlify.app">Website</a>
								<a href="https://discord.com/oauth2/authorize?client_id=896973500756148234&permissions=536870911991&scope=bot">Invite</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}