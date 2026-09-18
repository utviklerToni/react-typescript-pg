import NameFunc from '../components/WDS/NameFunc';
import TodoList from '../components/WDS/TodoList';
import UserCard from '../components/WDS/UserCard';
import userList from '../assets/user.json';

export default function WDS() {
	const user = userList.users[0];

	console.log(user);

	return (
		<main>
			{/* <NameFunc>
				<span>Child components goes here</span>
			</NameFunc>

			<TodoList name='test' isComplete={true}>
				item 1
			</TodoList> */}

			<UserCard
				name={user.name}
				age={user.age}
				phoneNumber={user.phone}
				address={user.address}
			/>
		</main>
	);
}
