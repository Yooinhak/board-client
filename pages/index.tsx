import Head from 'next/head';
import styled from 'styled-components';
import Input from '@components/Input';

export default function ClientSide() {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
}

const Wrapper = styled.div``;
