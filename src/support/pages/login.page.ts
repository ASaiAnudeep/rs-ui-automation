export default class LoginPage {
  get inputUsername() { return $('#text-input-email'); }
  get inputPassword() { return $('#text-input-password'); }
  get btnSubmit() { return $('button.ant-btn'); }
  get headerExtraLayer() { return $('div=Add an extra layer of security'); }
  get linkIDoLater() { return $(`a=I'll do this later`); }
  get headerEnable2FA() { return $(`div=You can still enable 2FA in Settings`); }
  get btnGoToDashboard() { return $('button.ant-btn'); }
}