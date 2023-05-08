import { useState } from 'react';

import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import { WrapperInputPassword, ButtonEye } from './styles';
import { InputForm } from '../../styles';

export function InputPassword() {
  const [hideOrShowEye, setHideOrShowEye] = useState<boolean>(false);

  function handleButtonEye(input: string) {
    const inputPassword = document.querySelector(
      `.${input}`
    ) as HTMLButtonElement;
    if (hideOrShowEye) {
      setHideOrShowEye(false);
      inputPassword.type = 'password';
    } else {
      setHideOrShowEye(true);
      inputPassword.type = 'text';
    }
  }

  return (
    <WrapperInputPassword>
      <InputForm
        className="password-login"
        typeInput="password"
        type="password"
        placeholder="Digite sua senha..."
      />
      <ButtonEye
        className="button-eye"
        onClick={() => handleButtonEye('password-login')}
      >
        {hideOrShowEye ? <VscEye /> : <VscEyeClosed />}
      </ButtonEye>
    </WrapperInputPassword>
  );
}
