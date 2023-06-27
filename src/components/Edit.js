function Formulaire(id) {

	const onSubmit = (d) => {
		d.preventDefault();
		const id = props.id;
		const titre = d.target.titre.value;
		const auteur = d.target.auteur.value;
		const prix = d.target.prix.value;
		const description = d.target.description.value;
		const livre = {titre, auteur, prix, description};
		console.log(livre);
		fetch('http://localhost:3000/livres', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(livre)
		}).then(() => {
			window.location.reload();
		});
	}

	return (
		<div className="Formulaire">
			<h1>Ajouter un Livre</h1>
			<form onSubmit={onSubmit} method="post">
				<div>
					<label for="titre">Titre: </label>
					<input type="text" name="titre" id="titre" required />
				</div>
				<div>
					<label for="auteur">Auteur: </label>
					<input type="text" name="auteur" id="auteur" required />
				</div>
				<div>
					<label for="prix">Prix: </label>
					<input type="text" name="prix" id="prix" required />
				</div>
				<div>
					<label for="description">Description: </label>
					<input type="text" name="description" id="description" required />
				</div>
				<div>
					<input type="submit" value="Ajouter le livre" />
				</div>
				
			</form>
		</div>
	);
}

export default Formulaire;