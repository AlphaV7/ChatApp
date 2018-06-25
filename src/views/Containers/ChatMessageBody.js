import React from 'react';
import { connect } from 'react-redux';

import { MessageList } from '../Components/index';

export class ChatMessageBody extends React.Component {
  constructor(props){
    super(props);
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }

  componentDidMount() {
    const { messageListElements } = this.props;

    messageListElements.length > 5 && this.scrollToBottom();
  }

  componentDidUpdate() {
    const { messageListElements } = this.props;

    messageListElements.length > 5 && this.scrollToBottom();
  }

  render(){
    const { messageListElements } = this.props;

    return (
      <div className="chat-body">
        <MessageList messageListElements={messageListElements}/>
        <div
          className="scroll-to-bottom"
          ref={(el) => { this.messagesEnd = el; }}></div>
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
