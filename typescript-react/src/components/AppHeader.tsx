import { userName } from "../store/meta/metadata.store";
import DivertiseLogo from "/icons/divertise-asia.webp";
import "./AppHeader.scss";

export function AppHeader() {
  return (
    <div className="app-header-container">
      <h1 className="user-name">{userName.value}</h1>
      <img src={DivertiseLogo} />
    </div>
  );
}
