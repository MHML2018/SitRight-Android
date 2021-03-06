import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ScorePage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Your Badges"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
               <View style={{flex:1}}>
                  <View style={{flex:1, flexDirection: row}}>
                     <Image style={{width: 200, height: 200}} source={require('../../../../assets/login_medal.png')} />
                     <Text>You have logged in 36 days in a row!</Text>
                  </View>
                  <View style={{flex:1, flexDirection: row}}>
                     <Image style={{width: 200, height: 200}} source={require('../../../../assets/friend_medal.png')} />
                     <Text>You have the longest streak of your friends</Text>
                  </View>
                  <View style={{flex:1, flexDirection: row}}>
                     <Image style={{width: 200, height: 200}} source={require('../../../../assets/target_met.png')} />
                     <Text>You met your score target for this week</Text>
                  </View>
                  <View style={{flex:1, flexDirection: row}}>
                     <Image style={{width: 200, height: 200}} source={require('../../../../assets/top_score.png')} />
                     <Text>You currently have the highest score of your friends</Text>
                  </View>
               </View>
					//<Text>{param !== undefined ? param.name.item : "Nothing to show yet..."}</Text>
				</Content>
			</Container>
		);
	}
}

export default ScorePage;
