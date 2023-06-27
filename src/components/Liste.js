import { useEffect, useState } from 'react';
import axios from 'axios';

function Liste () {

	const [livres, setLivres] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/livres')
			.then(res => setLivres(res.data));
	}, []);

	return (
		<div>
			<div>
				<h1>Liste des livres</h1>
			</div>
			
			{livres.map(livre => (
				<div key={livre.id}>
				<h2>{livre.titre}</h2>
				<p>{livre.auteur}</p>
				<p>{livre.description}</p>
				<p>{livre.prix}</p>
				</div>
			))}

			
				
			
	</div>
	)
}

export default Liste;