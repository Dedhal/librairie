function Formulaire() {

	const onSubmit = (d) => {
		d.preventDefault();
		const titre = d.target.titre.value;
		const auteur = d.target.auteur.value;
		const prix = d.target.prix.value;
		const description = d.target.description.value;
		const livre = {titre, auteur, prix, description};
		console.log(livre);
		fetch('http://localhost:3000/livres', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(livre)
		}).then(() => {
			window.location.reload();
		});
	}

	return (
		<div className="Formulaire m-3">

			<h1>Ajouter un Livre</h1>

			<div className="d-flex justify-content-center">
				<div className="card col-sm-6 m-3">
					<form onSubmit={onSubmit} method="post" className="card-body">
						<div className="form-group row m-2">
							<label for="titre" className="col-sm-2 col-form-label">Titre: </label>
							<input type="text" name="titre" id="titre" className="col-sm-10" required />
						</div>
						<div className="form-group row m-2">
							<label for="auteur" className="col-sm-2 col-form-label">Auteur: </label>
							<input type="text" name="auteur" id="auteur" className="col-sm-10" required />
						</div>
						<div className="form-group row m-2">
							<label for="prix" className="col-sm-2 col-form-label">Prix: </label>
							<input type="text" name="prix" id="prix" className="col-sm-10" required />
						</div>
						<div className="form-group row m-2">
							<label for="description" className="col-sm-2 col-form-label">Description: </label>
							<input type="text" name="description" id="description" className="col-sm-10" required />
						</div>
						<div className="form-group row m-2">
							<input type="submit" value="Ajouter le livre" />
						</div>
						
					</form>
				</div>
			</div>
		</div>
	);
}

export default Formulaire;