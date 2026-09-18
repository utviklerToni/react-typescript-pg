import React from 'react';

type UserCardProps = {
	name: string;
	phoneNumber: string;
	age: number;
	address: string;
};

export default function UserCard({
	name,
	phoneNumber,
	age,
	address,
}: UserCardProps) {
	return (
		<div className='w-full max-w-sm border border-gray-200 bg-white p-6 shadow-sm'>
			<div>
				<label htmlFor=''>Name: </label>
				{name}
			</div>
			<div>
				<label htmlFor=''>Phone: </label>
				{phoneNumber}
			</div>
			<div>
				<label htmlFor=''>Age: </label>
				{age}
			</div>
			<div>
				<label htmlFor=''>Address: </label>
				{address}
			</div>
		</div>
	);
}
