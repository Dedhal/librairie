import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import deleteIcon from '../assets/trash.svg';
import edit from '../assets/pencil.svg';

function Liste () {

	const [livres, setLivres] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:3000/livres')
			.then(res => setLivres(res.data));
	}, []);

	useEffect(() => {
		axios.get('http://localhost:3000/livres')
			.then(res => setLivres(res.data));
	}, [livres]);

	function deleteLivre(id) {
		console.log(id);
		axios.delete('http://localhost:3000/livres/' + id)
			.then(res => console.log(res.data));
		setLivres(livres.filter(el => el.id !== id));
	}

	function editLivre(livre) {
		console.log(livre);
		navigate('/edit/' + livre);
	}

	return (
		<div className="container">
			<div>
				<h1>Liste des livres</h1>
			</div>
			
			{livres.map((livre, index) => {
				if(index % 3 === 0) {
					return (
						<div className="row my-3" key={livre.id}>
							<div className="card col-sm m-3" style={{width: 23 + 'rem'}}>
								<div className="col-sm">
									<button className="btn btn-danger float-end m-1" onClick={() => deleteLivre(livre.id)}>
										<img src={deleteIcon} alt="delete" className="icon" />
									</button>
									<button className="btn btn-warning float-end m-1" onClick={() => editLivre(livre.id)}>
										<img src={edit} alt="edit" className="icon" />
									</button>
								</div>
								<div>
									<h2 className="card-title">{livre.titre}</h2>
								</div>

								<p className="card-text">{livre.auteur}</p>
								<p className="card-text">{livre.description}</p>
								<p className="card-text">{livre.prix}</p>
							</div>

							{index+1 < livres.length && 
							<div key={livres[index + 1].id} className="card col-sm m-3" style={{width: 23 + 'rem'}}>
								<div className="col-sm">
									<button className="btn btn-danger float-end m-1" onClick={() => deleteLivre(livres[index + 1].id)}>
										<img src={deleteIcon} alt="delete" className="icon" />
									</button>
									<button className="btn btn-warning float-end m-1" onClick={() => editLivre(livres[index + 1].id)}>
										<img src={edit} alt="edit" className="icon" />
									</button>
								</div>
								<div>
									<h2 className="card-title">{livres[index + 1].titre}</h2>
								</div>

								<p className="card-text">{livres[index + 1].auteur}</p>
								<p className="card-text">{livres[index + 1].description}</p>
								<p className="card-text">{livres[index + 1].prix}</p>
							</div>
							}
							{index+2 < livres.length && 
							<div key={livres[index + 2].id} className="card col-sm m-3" style={{width: 23 + 'rem'}}>
								<div className="col-sm">
									<button className="btn btn-danger float-end m-1" onClick={() => deleteLivre(livres[index + 2].id)}>
										<img src={deleteIcon} alt="delete" className="icon" />
									</button>
									<button className="btn btn-warning float-end m-1" onClick={() => editLivre(livres[index + 2].id)}>
										<img src={edit} alt="edit" className="icon" />
									</button>
								</div>
								<div>
									<h2 className="card-title">{livres[index + 2].titre}</h2>
								</div>

								<p className="card-text">{livres[index + 2].auteur}</p>
								<p className="card-text">{livres[index + 2].description}</p>
								<p className="card-text">{livres[index + 2].prix}</p>
							</div>
							}
						</div>
					)
				}
				return null;
				})
			}
	</div>
	)
}

export default Liste;