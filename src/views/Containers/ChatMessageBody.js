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
      <div className="chat-body">
        <MessageList messageListElements={messageListElements}/>
      </div>
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
