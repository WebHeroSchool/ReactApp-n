import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		avatarUrl: '',
		nameUser: '',
		profileUrl: '',
		fetchFailure: false
	}

	componentDidMount() {
		octokit.users.getByUsername({
		  username: 'Alina1317'
		}).then(({data}) => {
			this.setState({
				avatarUrl: data.avatar_url,
				nameUser: data.name,
				profileUrl: data.html_url
			})
		}).catch(() => {
			this.setState({
				fetchFailure: true
			})
		});

		octokit.repos.listForUser({
			username: 'Alina1317'
		}).then(({ data }) => {
			this.setState ({
				repoList: data,
				isLoading: false
			})
		}).catch(() => {
			this.setState({
				fetchFailure: true
			})
		});
	} 

	render() {
		const { isLoading, avatarUrl, nameUser, profileUrl, repoList, fetchFailure } = this.state;
		return (
			<div className={styles.wrap}>
				<div className={styles.about}>
					<h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Обо мне' }</h1>
					<img className={styles.img} src={ avatarUrl } alt="avatar" />
					<h2 className={styles.name}>{nameUser}</h2>
					<a href={profileUrl} target="_blank"><button className={styles.button}>Мой профиль на GitHub</button></a>
					{!isLoading && <ol>
						{repoList.map(repo => (<li key={repo.id}><a href={repo.html_url} target="_blank">
							{repo.name}
						</a>
						</li>))}
					</ol>}
					{fetchFailure && <h2>Ошибка, что-то пошло не так</h2>}
				</div>
			</div>
		);
	}
	
}
	

export default About;