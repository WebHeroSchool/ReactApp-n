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
		bioUser: '',
		locationUser: '',
		profileUrl: '',
		fetchFailure: false,
	}

	componentDidMount() {
		octokit.users.getByUsername({
		  username: 'Alina1317'
		}).then(({data}) => {
			this.setState({
				avatarUrl: data.avatar_url,
				nameUser: data.name,
				bioUser: data.bio,
				locationUser: data.location,
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
		const { isLoading, avatarUrl, nameUser, bioUser, locationUser, profileUrl, repoList, fetchFailure } = this.state;
		return (
			<div className={styles.wrap}>
			<h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Обо мне' }</h1>
				<div className={styles.about}>
					<img className={styles.img} src={ avatarUrl } alt="avatar" />
					<div className={styles.user}>
						<div className={styles.block}>
							<h2 className={styles.name}>{nameUser}</h2>
							<span className={styles.bio}>{bioUser}</span>
						    <span className={styles.location}>{locationUser}</span>
						</div>
						<div className={styles.social}>
					    	<a href={profileUrl} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><g fill="none" stroke="#434A54" stroke-linecap="round" stroke-miterlimit="1" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="10"/><path d="M8.548 15.751c.004.67.011 1.619.011 1.81M12.53 17.517c0-.252.009-1.646.009-2.669 0-.713-.245-1.178-.519-1.415 1.702-.19 3.49-.836 3.49-3.77 0-.835-.297-1.517-.787-2.052.08-.192.341-.97-.075-2.022 0 0-.64-.206-2.1.783-.61-.17-1.364-.254-2.014-.257-.65.003-1.403.088-2.012.257-1.46-.989-2.103-.783-2.103-.783-.414 1.052-.153 1.83-.074 2.022a2.957 2.957 0 00-.787 2.051c0 2.928 1.784 3.584 3.482 3.777-.219.19-.317 1.58-.385 2.074-.436.195-1.543.533-2.224-.636 0 0-.404-.733-1.172-.787"/></g></svg></a>
							<a href="https://t.me/Alina8627" target="_blank" rel="noopener noreferrer"><svg height="21" viewBox="0 0 24 24" width="21" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.617 0 12-5.383 12-12S18.617 0 12 0 0 5.383 0 12s5.383 12 12 12zm0-22.5c5.79 0 10.5 4.71 10.5 10.5S17.79 22.5 12 22.5 1.5 17.79 1.5 12 6.21 1.5 12 1.5z" fill="#434A54"/><path d="M7.896 14.155l1.568-.681-.44.441a.75.75 0 00-.22.53v2.935c0 .672.812.998 1.28.53l1.574-1.574 3.43 1.715a.75.75 0 001.073-.537l1.957-10.761a.751.751 0 00-1.012-.833L4.39 10.897a.75.75 0 00-.13 1.331L7.194 14.1c.21.134.475.155.702.055zm8.506-6.347l-1.537 8.455-3.02-1.509a.748.748 0 00-.865.141l-.676.676v-.813l3.007-3.007c.583-.583-.073-1.545-.829-1.218l-4.817 2.09-1.354-.864z" fill="#434A54"/></svg></a>
						</div>
					</div>	
				</div>
				<div className={styles.rp}>
					<h3 className={styles.my}>Мои репозитории</h3>
					{!isLoading && <div className={styles.li}>
						{repoList.map(repo => (<div className={styles.button} key={repo.id}><a href={repo.html_url} target="_blank" rel="noopener noreferrer">
							<span className={styles.namerepo}>{repo.name}</span> 
							<p className={styles.desc}>{repo.description}</p>
						</a>
						</div>))}
					</div>}
				</div>
				{fetchFailure && <h2>Ошибка, что-то пошло не так</h2>}
			</div>
		);
	}	
}
	

export default About;