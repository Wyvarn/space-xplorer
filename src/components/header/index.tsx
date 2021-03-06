/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import dog1 from '@assets/images/dog-1.png';
import dog2 from '@assets/images/dog-2.png';
import dog3 from '@assets/images/dog-3.png';
import { Subheading, Container, Image } from './headerStyles';

const max = 25; // 25 letters in the alphabet
const offset = 97; // letter A's charcode is 97
const avatars = [dog1, dog2, dog3];
const maxIndex = avatars.length - 1;

function pickAvatarByEmail(email: string): string {
  const charCode = email.toLowerCase().charCodeAt(0) - offset;
  const percentile = Math.max(0, Math.min(max, charCode)) / max;
  return avatars[Math.round(maxIndex * percentile)];
}

interface Props {
  image?: string | any;
  children?: string | any;
}
const Header: React.FC<Props> = ({ image, children = 'Space Xplorer' }: Props) => {
  const email = atob(localStorage.getItem('token') as string);
  const avatar = image || pickAvatarByEmail(email);

  return (
    <Container>
      <Image round={!image} src={avatar} alt="Space dog" />
      <div>
        <h2>{children}</h2>
        <Subheading>{email}</Subheading>
      </div>
    </Container>
  );
};

export default Header;
