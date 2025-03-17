import "./sidebar.css";
import {
  Chat,
  PlayCircleFilledOutlined,
  Event,
  CheckBox,
  Newspaper,
  ContactSupport,
  Person3,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {  } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Newspaper className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <CheckBox className="sidebarIcon" />
            <span className="sidebarListItemText">Test</span>
          </li>
        </ul>

        <li className="sidebarListItem">
            <ContactSupport className="sidebarIcon"  />
            <span className="sidebarListItemText">AboutUs</span>
          </li>

          <li className="sidebarListItem">
            <Person3 className="sidebarIcon" />
            <span className="sidebarListItemText">ContactUs</span>
          </li>

        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
