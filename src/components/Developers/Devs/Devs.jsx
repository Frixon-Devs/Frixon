import React from 'react';
import './Devs.css';
import css from '../assets/css.svg'
import html from '../assets/html.svg'
import java from '../assets/java.svg'
import link from '../assets/link.svg'
import python from '../assets/python.svg'
import javascript from '../assets/javascript.svg'
import rust from '../assets/rust.svg'
import csharp from '../assets/csharp.svg'
import react from '../assets/react.svg'
import typescript from '../assets/typescript.svg'
import cpp from '../assets/cpp.svg'


export function TigerNinja() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/733650965269446666/f93eee6c7ff8ac5104c09adaf5277593.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>StaticVoid#1551</h1>
                            <div className="icons">
                                <a href="https://twitter.com/TigerNinja17/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/TigerNinja22" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/718712985371148309"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Founder</span>
                                <span className="role">Team Manager</span>
                                <span className="role">Lead Developer</span>
                                <span className="role">Developers</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="Python Logo" />
                            <img src={css} alt="CSS Logo" />
                            <img src={html} alt="HTML Logo" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>StaticVoid#1551</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">
                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Bolt</h1>
                                    <p>Bolt is a very powerfull moderation bot for your discord server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">CogBot</h1>
                                    <p>CogBot is the all in one discord bot to help your server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://cog-bot.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function StaticVoid() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/733650965269446666/f93eee6c7ff8ac5104c09adaf5277593.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>StaticVoid#1551</h1>
                            <div className="icons">
                                <a href="https://twitter.com/TigerNinja17/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/TigerNinja22" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/718712985371148309"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Founder</span>
                                <span className="role">Team Manager</span>
                                <span className="role">Lead Developer</span>
                                <span className="role">Developers</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="Python Logo" />
                            <img src={java} alt="Java Logo" />
                            <img src={rust} alt="Rust Logo" />
                            <img src={css} alt="CSS Logo" />
                            <img src={html} alt="HTML Logo" />
                            <img src={javascript} alt="JavaScript Logo" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>TStaticVoid#1551</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">
                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Bolt</h1>
                                    <p>Bolt is a very powerfull moderation bot for your discord server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">CogBot</h1>
                                    <p>CogBot is the all in one discord bot to help your server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://cog-bot.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Antimatter() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/822730830027816960/2304371ab9970407ea285a105415c35c.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>Antimatter23l3#2750</h1>
                            <div className="icons">
                                <a href="https://twitter.com/TigerNinja17/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/TigerNinja22" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/822730830027816960"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Founder</span>
                                <span className="role">Team Manager</span>
                                <span className="role">Lead Developer</span>
                                <span className="role">Developers</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={css} alt="" />
                            <img src={html} alt="" />
                            <img src={csharp} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>Antimatter23l3#2750</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">
                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Bolt</h1>
                                    <p>Bolt is a very powerfull moderation bot for your discord server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">CogBot</h1>
                                    <p>CogBot is the all in one discord bot to help your server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://cog-bot.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
							<div className="project">
                                <div className="details">
                                    <h1 className="title">Jelly</h1>
                                    <p>Jelly is a fun bot to keep your server laughing!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://jellybot-discord.netlify.app/">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MustafaXD() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/831585664859373588/2681cf30e97bdfc375ead5201f918e86.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>MustafaXD#9999</h1>
                            <div className="icons">
                                <a href="https://twitter.com/Mustafa10341531" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/MustafaTheCoder" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/831585664859373588"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Lead Web Developer</span>
                                <span className="role">Team Manager</span>
                                <span className="role">Developers</span>
                                <span className="role">Web Developer</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={css} alt="" />
                            <img src={html} alt="" />
                            <img src={javascript} alt="" />
                            <img src={cpp} alt="" />
                            <img src={csharp} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>MustafaXD#9999</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">
                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Bolt</h1>
                                    <p>Bolt is a very powerfull moderation bot for your discord server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Jelly</h1>
                                    <p>Jelly is a fun bot to keep your server laughing!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://jellybot-discord.netlify.app/">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Qwel() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/809805000905326603/cb98dc402f79cb323680d39dbffe86bf.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>qwel.exe#4954</h1>
                            <div className="icons">
                                <a href="https://twitter.com/TigerNinja17/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/qwel-exe" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/809805000905326603"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Lead Desinger</span>
                                <span className="role">Team Manager</span>
                                <span className="role">Developers</span>
                                <span className="role">Web Developer</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={css} alt="" />
                            <img src={html} alt="" />
                            <img src={javascript} alt="" />
                            <img src={typescript} alt="" />
                            <img src={csharp} alt="" />
                            <img src={cpp} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>qwel.exe#4954</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Jelly</h1>
                                    <p>Jelly is a fun bot to keep your server laughing!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://jellybot-discord.netlify.app/">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Team Frixion™ Website</h1>
                                    <p>This website!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={react} alt="" />
                                            ReactJS
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://team-frixion.co">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Lil() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/696650928907878440/6b489de2385e939d78dab0981d01d775.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>Lil ツ™#6960</h1>
                            <div className="icons">
                                <a href="https://twitter.com/ExpertTutorial_/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/ExpertTutorials" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/696650928907878440"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Developers</span>
                                <span className="role">Web Developer</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={css} alt="" />
                            <img src={html} alt="" />
                            <img src={javascript} alt="" />
                            <img src={java} alt="" />
                            <img src={cpp} alt="" />
                            <img src={typescript} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>Lil ツ™#6960</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">

							<div className="project">
                                <div className="details">
                                    <h1 className="title">Bolt</h1>
                                    <p>Bolt is a very powerfull moderation bot for your discord server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Flake</h1>
                                    <p>Flake is the best economy discord bot to keep your chat alive!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://flake.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>

                            <div className="project">
                                <div className="details">
                                    <h1 className="title">Team Frixion™ Website</h1>
                                    <p>This website!</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={react} alt="" />
                                            ReactJS
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://team-frixion.co">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Brody() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/774966544664100865/a_2decbf98f48cd18990ee7ca5995e7686.gif?size=1024" alt="" />
                        <div className="details">
                            <h1>!Broody#1234</h1>
                            <div className="icons">
                                <a href="https://twitter.com/ExpertTutorial_/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/ExpertTutorials" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/774966544664100865"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Web Developer</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={css} alt="" />
                            <img src={html} alt="" />
                            <img src={javascript} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>!Broody#1234</span> has worked on in <span>Team Frixion™</span></h1>
                        <div className="prjs">
							<div className="project">
                                <div className="details">
                                    <h1 className="title">CogBot</h1>
                                    <p>CogBot is the all in one discord bot to help your server.</p>
                                    <span>
                                        Language:
                                        <div className="l">
                                            <img src={python} alt="" />
                                            Python
                                        </div>
                                    </span>
                                </div>
                                <div className="link">
                                    <a target="popup" href="https://bolt-discord.netlify.app">
                                        <ion-icon className="box" src={link}></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Nikolipo() {
    return (
        <div className="developer">
            <div className="content">
                <div className="top">
                    <div className="profile">
                        <img src="https://cdn.discordapp.com/avatars/564452749425639483/6e85b44c65d71cda0c7ad5218e333cf8.webp?size=1024" alt="" />
                        <div className="details">
                            <h1>nikolipo#2300</h1>
                            <div className="icons">
                                <a href="https://twitter.com/ExpertTutorial_/" target="popup"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="https://github.com/ExpertTutorials" target="popup"><ion-icon name="logo-github"></ion-icon></a>
                                <a href="https://discord.com/users/774966544664100865"><ion-icon name="logo-discord"></ion-icon></a>
                            </div>
                            <div className="roles">
                                <span className="role">Developer</span>
                                <span className="role">Admin</span>
                            </div>
                        </div>
                    </div>
                    <div className="languages">
                        <h1 className="title">Languages Known</h1>
                        <div className="langs">
                            <img src={python} alt="" />
                            <img src={javascript} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="projects">
                        <h1>Projects <span>nikolipo#2300</span> has worked on in <span>Team Frixion™</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}