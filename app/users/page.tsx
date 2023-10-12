interface User {
	id: number;
	name: string;
	email: string;
}

const UsersPage = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users', {
		next: { revalidate: 10 },
	});
	const users: User[] = await res.json();

	return (
		<>
			<h1>Users</h1>
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.id} className='hover'>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default UsersPage;
