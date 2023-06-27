import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Edit() {
	const navigate = useNavigate();
	const { id } = useParams()
	const [livre, setLivre] = useState({});

	useEffect(() => {
	    axios.get('http://localhost:3000/livres/' + id)
		.then(res => setLivre(res.data))
		}, [])


	const setTitre = (titre) => {
		setLivre({...livre, titre: titre});
	}

	const setAuteur = (auteur) => {
		setLivre({...livre, auteur: auteur});
	}

	const setPrix = (prix) => {
	    setLivre({...livre, prix: prix});
	}

	const setDescription = (description) => {
		setLivre({...livre, description: description});
	}

	const onSubmit = (d) => {
		d.preventDefault();
		const titre = d.target.titre.value;
		const auteur = d.target.auteur.value;
		const prix = d.target.prix.value;
		const description = d.target.description.value;
		const livre = {titre, auteur, prix, description};
		console.log(livre);
		fetch('http://localhost:3000/livres/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(livre)
		}).then(() => {
			navigate('/')
		});

	}

	return (
		<div className="Formulaire m-3">
			<h1>Edition</h1>

			<div className="d-flex justify-content-center">
				<div className="card col-sm-6 m-3">
					<form onSubmit={onSubmit} method="post" className="card-body">
						<div className="form-group row m-2">
							<label for="titre" className="col-sm-2 col-form-label">Titre: </label>
							<input type="text" name="titre" id="titre" className="col-sm-10" value={livre.titre} onChange={e => setTitre(e.target.value)} required />
						</div>
						<div className="form-group row m-2">
							<label for="auteur" className="col-sm-2 col-form-label">Auteur: </label>
							<input type="text" name="auteur" id="auteur" className="col-sm-10" value={livre.auteur} onChange={e => setAuteur(e.target.value)} required />
						</div>
						<div className="form-group row m-2">
							<label for="prix" className="col-sm-2 col-form-label">Prix: </label>
							<input type="text" name="prix" id="prix" className="col-sm-10" value={livre.prix} onChange={e => setPrix(e.target.value)} required />
						</div>
						<div className="form-group row m-2">
							<label for="description" className="col-sm-2 col-form-label">Description: </label>
							<input type="text" name="description" id="description" className="col-sm-10" value={livre.description} onChange={e => setDescription(e.target.value)} required />
						</div>
						<div className="form-group row m-2">
							<input type="submit" value="Editer" />
						</div>
						
					</form>
				</div>
			</div>
		</div>
	);
}

export default Edit;