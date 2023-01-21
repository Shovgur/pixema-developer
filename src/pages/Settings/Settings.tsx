import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./Settings.css";

const Settings = () => {
  return (
    <main className="settings">
      <div className="settings__container">
        <div className="settings__profile">
          <span className="settings__profile__label">Profile</span>
          <div className="settings__profile__content">
            <div className="settings__profile__content__name">
              <label htmlFor="name">Name</label>
              <Input placeholder="Your name" id="name"></Input>
            </div>
            <div className="settings__profile__content__email">
              <label htmlFor="email">Email</label>
              <Input placeholder="Your email" id="email"></Input>
            </div>
          </div>
        </div>
        <div className="settings__password">
          <span className="settings__password__label">Password</span>
          <div className="settings__password__content">
            <div className="settings__password__content__column">
              <div className="settings__password__content__password">
                <label htmlFor="password">Password</label>
                <Input placeholder="Your password" id="password"></Input>
              </div>
            </div>
            <div className="settings__password__content__column">
              <div className="settings__password__content__newPassword">
                <label htmlFor="newPassword">New password</label>
                <Input placeholder="New password" id="newPassword"></Input>
              </div>
              <div className="settings__password__content__confirmPassword">
                <label htmlFor="confirmPassword">Confirm password</label>
                <Input placeholder="Confirm password" id="confirmPassword"></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__theme">
          <span className="settings__theme__label">Color mode</span>
          <div className="settings__theme__content">
            <div className="settings__theme__content__info">
              <span className="settings__theme__content__info__theme">Dark</span>
              <span className="settings__theme__content__info__help">Use dark thema</span>
            </div>
            <h3>SWITCH</h3>
          </div>
        </div>
        <div className="settings__tabs">
          <Button className="secondary" text="Canel"></Button>
          <Button className="primary" text="Save"></Button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
