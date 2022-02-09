import React from 'react';
import './About.css'

export default function About() {
    return (
        <div className="about">
            <div className="content">
                <h1 className="title">About <span>Team Frixion™</span></h1>
                <div className="text">
                    <img src="https://images-ext-2.discordapp.net/external/oizC_UQN4eBjaDiklfr1WvsbfWDJuIUw-VVrt_eoOwY/https/media.discordapp.net/attachments/938295913292636190/939447516649369630/teamfrixion.png?width=374&height=375" alt="" />
                    <p>Team Frixion is a team of bot developers that manufactures verified Discord bots for the betterment of the future of Discord bots and the platform itself, currently the verified bots we have are Bolt and CogBot, and alot other bots which are growing more and more at a tremendous speed. All our bots are kept under heavy security to make it risk-free for people to openly invite and use our bots, before starting to change/update or for any type of maintenance we announce it in the bot-logs channel on our Discord server to keep everyone updated about what is going on with a specific bot. </p>
                </div>
            </div>
        </div>
    );
}
