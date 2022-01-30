import Actions from "./Actions";
import Avatar from "./Avatar";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";

function Tweet({user, timestamp, message}) {
  return (
    <div className="tweet">
      <Avatar image={user.image}/>
      
      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
