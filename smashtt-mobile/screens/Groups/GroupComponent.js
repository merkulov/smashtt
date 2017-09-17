import * as React from "react";
import {Col, Grid, Row, Text} from "native-base";

export class GroupComponent extends React.Component {
	render() {
		return (
			<Grid key={this.props.group.name}>
				<Row key="header">
					<Col key="nameColumn"></Col>
					{
						this.props.group.players.map((player) => {
							return <Col key={player.name+"col"}><Text>{player.name.length > 0 ? player.name.substring(0,1) : ""}</Text></Col>
						})
					}
				</Row>
				{
					this.props.group.players.map((player) => {
						return (
							<Row key={player.name}>
								<Col key={player.name+"col"}><Text>{player.name}</Text></Col>
								{
									this.props.group.players.map((opponent) => {
										return (
											<Col key={player.name + opponent.name}>
												{player.name === opponent.name &&
													<Text>X</Text>
												}
											</Col>
										)
									})
								}
							</Row>
						)
					})
				}
			</Grid>
		)
	}
}