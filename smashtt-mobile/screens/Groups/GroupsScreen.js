import {Container, Content, Header, List, ListItem, Text, View} from "native-base";
import * as React from "react";
import GroupsApi from "../../api/GroupsApi";
import {GroupComponent} from "./GroupComponent";

export default class GroupsScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			groups:[]
		}
	}

	componentDidMount() {
		const api = GroupsApi;

		this.setState(
			{ groups: api.getGroups().groups }
		);
	}

	render() {
		return (
			<Container>
				<Header />
				<Content>
					<List dataArray={this.state.groups}
					      renderRow={(group) =>
						      <ListItem>
							      <View style={{flex: 1}}>
								      <View style={{alignItems: 'center', flex: 1}}>
								        <Text>{group.name}</Text>
								      </View>
								      <View>
									      <GroupComponent
										      group={group}
										      key={group.name}
									      />
								      </View>
							      </View>
						      </ListItem>
					      }>
					</List>
				</Content>
			</Container>
		);
	}
}
