/**
* PropertyFinder search results.
*/

'use strict';
import React, {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component,
} from 'react-native';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.guid !== r2.guid
    });

    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight underlayColor="#ddd">
      <View>
        <Text>{rowData.title}</Text>
      </View>
    )
  }

  render() {
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow.bind(this)}
      </ListView>
    )
  }
}

module.exports = SearchResults;
