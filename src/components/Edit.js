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
		<div className="Formulaire">
			<h1>Ajouter un Livre</h1>
			<form onSubmit={onSubmit} method="post">
				<div>
					<label for="titre">Titre: </label>
					<input type="text" name="titre" id="titre" value={livre.titre} onChange={e => setTitre(e.target.value)} required />
				</div>
				<div>
					<label for="auteur">Auteur: </label>
					<input type="text" name="auteur" id="auteur" value={livre.auteur} onChange={e => setAuteur(e.target.value)} required />
				</div>
				<div>
					<label for="prix">Prix: </label>
					<input type="text" name="prix" id="prix" value={livre.prix} onChange={e => setPrix(e.target.value)} required />
				</div>
				<div>
					<label for="description">Description: </label>
					<input type="text" name="description" id="description" value={livre.description} onChange={e => setDescription(e.target.value)} required />
				</div>
				<div>
					<input type="submit" value="Editer" />
				</div>
				
			</form>
		</div>
	);
}

export default Edit;