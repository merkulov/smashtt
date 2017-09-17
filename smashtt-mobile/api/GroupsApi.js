export class GroupsApi {
	getGroups() {
		return {
			"groups": [
				{
					name: "Group 1",
					players: [
						{
							name: "Mikhail Merkulov",
							rating: 1500
						},
						{
							name: "John Doe",
							rating: 1499
						},
						{
							name: "Rahul Kan",
							rating: 1374
						},
					]
				},
				{
					name: "Group 2",
					players: [
						{
							name: "Blake Johnson",
							rating: 1355
						},
						{
							name: "Arul Kum",
							rating: 1296
						},
						{
							name: "Sucheta Parthanarayan",
							rating: 1100
						},
					]
				}
			]
		};
	}
}

export default new GroupsApi();