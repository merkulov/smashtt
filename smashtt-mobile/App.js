import React from 'react';
import { StatusBar, StyleSheet, Text, View } from "react-native";
import {Container, StyleProvider, Root, getTheme} from "native-base";
import GroupsScreen from "./screens/Groups/GroupsScreen";
import material from "native-base/src/theme/variables/material";

export class App extends React.Component {
	constructor() {
		super();

		this.state = {
			isFontsReady: false,
		};
	}

	async componentWillMount() {
		await Expo.Font.loadAsync({
			"Roboto": require("./assets/fonts/Roboto/Roboto.ttf"),
			"Roboto_medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
		});
		this.setState({
			isFontsReady: true,
		})
	}

	render() {
		return (
			<Container>
				<StatusBar hidden={true}/>
				{this.state.isFontsReady ? <GroupsScreen/> : null}
			</Container>
		);
	}
}

export default class RootComponent extends React.Component {
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Root>
					<App />
				</Root>
			</StyleProvider>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
