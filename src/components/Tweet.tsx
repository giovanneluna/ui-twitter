import { Link } from "react-router-dom";
import "./Tweet.css";
import { ChatCircle, ArrowsClockwise, Heart } from "phosphor-react";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/tweet" className="tweet">
      <img src="https://github.com/giovanneluna.png" alt="Giovanne de Luna" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Giovanne de Luna</strong>
          <span>@giovanneluna</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
