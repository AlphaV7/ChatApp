import React from 'react';
import { connect } from 'react-redux';

import { MessageList } from '../Components/index';

export class ChatMessageBody extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { messageListElements } = this.props;

    return (
      <MessageList messageListElements={messageListElements}/>
    );
  }
}

const mapStateToProps = function(state) {
  const { messageListElements } = state;

  return {
    messageListElements: messageListElements || [],
  };
};

export default connect(mapStateToProps)(ChatMessageBody);
